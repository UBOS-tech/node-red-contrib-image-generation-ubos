/**
 * Copyright JS Foundation and other contributors, http://js.foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

module.exports = function(RED) {
    const fs = require('fs');
    const path = require("path");
    const crypt = require("crypto-js");

    const file = path.join(__dirname, "subflow.json");
    const text = fs.readFileSync(file);
    const flow = JSON.parse(text);

    function getDecoder(encoding) {
        var settings = RED.settings;
        if (settings &&
            settings.encodeSubflow &&
            settings.encodeSubflow.methods) {
            const methods = settings.encodeSubflow.methods;
            const method = methods.find((x) => (x.name === encoding));
            if (method) {
                return method.decode;
            }
        }
        if (encoding == "AES") {
            return function (enc, key) {
                var enc = crypt.AES.decrypt(enc, key)
                var data = enc.toString(crypt.enc.Utf8);
                return JSON.parse(data);
            };
        }
        // no decoding
        return null;
    }

    function convFlow(sf) {
        const flow = sf.flow;
        if (((typeof flow) === "object") &&
            !Array.isArray(flow)) {
            if (flow.hasOwnProperty("encoding") &&
                flow.hasOwnProperty("flow")) {
                const encoding = flow.encoding;
                const body = flow.flow;
                const decoder = getDecoder(encoding);
                if (decoder) {
                    const key = process.env["NR_FLOW_DECODE_KEY"];
                    if (key && (key !== "")) {
                        try {
                            RED.log.info("deocde "+encoding+ " encoded flow");
                            const flowData = decoder(body, key);
                            sf.flow = flowData;
                        }
                        catch (e) {
                            throw new Error("flow decode error:"+e.toString());
                        }
                    }
                    else {
                        throw new Error("no flow decode key specified");
                    }
                }
                else {
                    throw new Error("no decoder found:" +encoding);
                }
            }
        }
        return sf;
    }

    RED.nodes.registerSubflow(convFlow(flow));
}
