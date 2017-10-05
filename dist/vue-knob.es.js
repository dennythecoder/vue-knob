var VueKnob$1 = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('svg', { attrs: { "width": "100%", "height": "100%", "viewBox": "0 0 42 42", "preserveAspectRatio": "" } }, [_c('circle', { staticClass: "hole", attrs: { "cx": "21", "cy": "21", "r": "15", "fill": "#fff" } }), _vm._v(" "), _c('circle', { ref: "ring", staticClass: "ring", attrs: { "cx": "21", "cy": "21", "r": "15", "fill": "transparent", "stroke": "#d2d3d4", "stroke-width": "5" } }), _vm._v(" "), _c('circle', { ref: "segment", staticClass: "segment", attrs: { "cx": "21", "cy": "21", "r": "15", "fill": "transparent", "stroke": _vm.color, "stroke-width": "5", "stroke-dasharray": _vm.strokeDasharray, "stroke-dashoffset": "0" } }), _vm._v(" "), _c('g', [_c('text', { style: _vm.labelStyle, attrs: { "y": "50%", "x": "50%" } }, [_vm._v(" " + _vm._s(_vm.value) + " ")])])]);
  }, staticRenderFns: [],
  template: '#vue-knob',
  props: {
    value: {
      type: Number,
      required: true,
      validator: function validator(value) {
        return value > 0 && value <= 100;
      }
    },
    color: {
      type: String,
      required: false,
      default: '#17d'
    }
  },
  computed: {
    strokeDasharray: function strokeDasharray() {
      var value = this.value * 94 / 100;
      return value + ' ' + (94 - value);
    },
    labelStyle: function labelStyle() {
      var transformY = void 0;
      if (this.value === 100) {
        transformY = 0.75;
      } else {
        if (this.value >= 10) {
          transformY = 0.5;
        } else {
          transformY = 0.25;
        }
      }
      return {
        transform: "translateX(-" + transformY + "em) translateY(0.4em)",
        'font-size': '0.7em'
      };
    }
  },
  methods: {
    computeValue: function computeValue(e) {
      var rect = this.$refs.ring.getBoundingClientRect(),
          centerX = rect.width / 2 + rect.left,
          centerY = rect.height / 2 + rect.top,
          clickX = e.clientX,
          clickY = e.clientY;
      var result = Math.atan2(centerY - clickY, centerX - clickX);
      var percentage = (result + Math.PI) / (Math.PI + Math.PI);
      this.$emit('input', Math.ceil(percentage * 100));
    }
  },
  mounted: function mounted() {
    this.$refs.ring.addEventListener('click', this.computeValue);
    this.$refs.segment.addEventListener('click', this.computeValue);
  }
};

export default VueKnob$1;
