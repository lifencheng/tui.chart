ne.util.defineNamespace("fedoc.content", {});
fedoc.content["eventHandleLayers_lineTypeEventHandleLayer.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview LineTypeEventHandleLayer is event handle layer for line type chart.\n * @author NHN Ent.\n *         FE Development Team &lt;dl_javascript@nhnent.com>\n */\n\n'use strict';\n\nvar EventHandleLayerBase = require('./eventHandleLayerBase');\n\nvar LineTypeEventHandleLayer = tui.util.defineClass(EventHandleLayerBase, /** @lends LineTypeEventHandleLayer.prototype */ {\n    /**\n     * LineTypeEventHandleLayer is event handle layer for line type chart.\n     * @constructs LineTypeEventHandleLayer\n     * @extends LineTypeEventHandleLayer\n     */\n    init: function() {\n        EventHandleLayerBase.apply(this, arguments);\n    },\n\n    /**\n     * To make coordinate data.\n     * @param {{width: number, height: number}} dimension dimension\n     * @param {number} tickCount tick count\n     * @returns {array.&lt;{min: number, max: number}>} tick groups\n     * @private\n     */\n    makeCoordinateData: function(dimension, tickCount) {\n        return this.makeLineTypeCoordinateData(dimension.width, tickCount);\n    },\n\n    /**\n     * On mousemove.\n     * @param {MouseEvent} e mouse event object\n     * @override\n     */\n    onMousemove: function(e) {\n        var elTarget = e.target || e.srcElement,\n            bound = elTarget.getBoundingClientRect(),\n            layerX = e.clientX - bound.left,\n            layerY = e.clientY - bound.top,\n            index = this.findIndex(layerX);\n        this.fire('overTickSector', index, layerY);\n    },\n\n    /**\n     * On mouseout.\n     * @param {MouseEvent} e mouse event object\n     * @override\n     */\n    onMouseout: function() {\n        this.fire('outTickSector');\n    }\n});\n\ntui.util.CustomEvents.mixin(LineTypeEventHandleLayer);\n\nmodule.exports = LineTypeEventHandleLayer;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"