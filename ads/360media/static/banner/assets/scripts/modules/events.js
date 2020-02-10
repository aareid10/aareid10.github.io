/**
 * A module
 * @public
 * @module modules/Module
 * @requires {Module/Class}
 * @author Alex Reid <https://github.com/aareid10>
 * @see {@link http://github.com|ProjectRepo}
 * @since 1.0.0
 */

const events = {
  // View events
  onResize: (target, fx) => target.addEventListener('resize', fx),
  onResize: (target, fx) => target.addEventListener('resize', fx),
  onResize: (target, fx) => target.addEventListener('resize', fx),
  onScroll: (target, fx) => target.addEventListener('scroll', fx),

  // Focus events
  onFocus: (target, fx) => target.addEventListener('focus', fx),
  onBlur: (target, fx) => target.addEventListener('blur', fx),

  // CSS Animation events
  onAnimationstart: (target, fx) => target.addEventListener('animationstart', fx),
  onAnimationcancel: (target, fx) => target.addEventListener('animationcancel', fx),
  onAnimationend: (target, fx) => target.addEventListener('animationend', fx),
  onAnimationiteration: (target, fx) => target.addEventListener('animationiteration', fx),

  // CSS Transition events
  onTransitionstart: (target, fx) => target.addEventListener('transitionstart', fx),
  onTransitioncancel: (target, fx) => target.addEventListener('transitioncancel', fx),
  onTransitionend: (target, fx) => target.addEventListener('transitionend', fx),
  onTransitionrun: (target, fx) => target.addEventListener('transitionrun', fx),

  // Mouse events
  onAuxclick: (target, fx) => target.addEventListener('auxclick', fx),
  onClick: (target, fx) => target.addEventListener('click', fx),
  onContextmenu: (target, fx) => target.addEventListener('contextmenu', fx),
  onDblclick: (target, fx) => target.addEventListener('dblclick', fx),
  onMousedown: (target, fx) => target.addEventListener('mousedown', fx),
  onMouseenter: (target, fx) => target.addEventListener('mouseenter', fx),
  onMouseleave: (target, fx) => target.addEventListener('mouseleave', fx),
  onMousemove: (target, fx) => target.addEventListener('mousemove', fx),
  onMouseover: (target, fx) => target.addEventListener('mouseover', fx),
  onMouseout: (target, fx) => target.addEventListener('mouseout', fx),
  onMouseup: (target, fx) => target.addEventListener('mouseup', fx),
  onPointerlockchange: (target, fx) => target.addEventListener('pointerlockchange', fx),
  onPointerlockerror: (target, fx) => target.addEventListener('pointerlockerror', fx),
  onSelect: (target, fx) => target.addEventListener('select', fx),
  onWheel: (target, fx) => target.addEventListener('wheel', fx),

  // Drag & Drop events
  onDrag: (target, fx) => target.addEventListener('drag', fx),
  onDragend: (target, fx) => target.addEventListener('dragend', fx),
  onDragenter: (target, fx) => target.addEventListener('dragenter', fx),
  onDragstart: (target, fx) => target.addEventListener('dragstart', fx),
  onDragleave: (target, fx) => target.addEventListener('dragleave', fx),
  onDragover: (target, fx) => target.addEventListener('dragover', fx),
  onDrop: (target, fx) => target.addEventListener('drop', fx),

  // Media events
  onAudioprocess: (target, fx) => target.addEventListener('audioprocess', fx),
  onCanplay: (target, fx) => target.addEventListener('canplay', fx),
  onCanplaythrough: (target, fx) => target.addEventListener('canplaythrough', fx),
  onComplete: (target, fx) => target.addEventListener('complete', fx),
  onDurationchange: (target, fx) => target.addEventListener('durationchange', fx),
  onEmptied: (target, fx) => target.addEventListener('emptied', fx),
  onEnded: (target, fx) => target.addEventListener('ended', fx),
  onLoadeddata: (target, fx) => target.addEventListener('loadeddata', fx),
  onLoadedmetadata: (target, fx) => target.addEventListener('loadedmetadata', fx),
  onPause: (target, fx) => target.addEventListener('pause', fx),
  onPlay: (target, fx) => target.addEventListener('play', fx),
  onPlaying: (target, fx) => target.addEventListener('playing', fx),
  onRatechange: (target, fx) => target.addEventListener('ratechange', fx),
  onSeeked: (target, fx) => target.addEventListener('seeked', fx),
  onSeeking: (target, fx) => target.addEventListener('seeking', fx),
  onStalled: (target, fx) => target.addEventListener('stalled', fx),
  onSuspend: (target, fx) => target.addEventListener('suspend', fx),
  onTimeupdate: (target, fx) => target.addEventListener('timeupdate', fx),
  onVolumechange: (target, fx) => target.addEventListener('volumechange', fx),
  onWaiting: (target, fx) => target.addEventListener('waiting', fx),

  // DOM mutation events
  onAttributeNameChanged: (target, fx) => target.addEventListener('DOMAttributeNameChanged', fx),
  onAttrModified: (target, fx) => target.addEventListener('DOMAttrModified', fx),
  onCharacterDataModified: (target, fx) => target.addEventListener('DOMCharacterDataModified', fx),
  onContentLoaded: (target, fx) => target.addEventListener('DOMContentLoaded', fx),
  onElementNameChanged: (target, fx) => target.addEventListener('DOMElementNameChanged', fx),
  onNodeInserted: (target, fx) => target.addEventListener('DOMNodeInserted', fx),
  onNodeInsertedIntoDocument: (target, fx) =>
    target.addEventListener('DOMNodeInsertedIntoDocument', fx),
  onNodeRemoved: (target, fx) => target.addEventListener('DOMNodeRemoved', fx),
  onNodeRemovedFromDocument: (target, fx) =>
    target.addEventListener('DOMNodeRemovedFromDocument', fx),
  onSubtreeModified: (target, fx) => target.addEventListener('DOMSubtreeModified', fx),

  // Value change events
  onBroadcast: (target, fx) => target.addEventListener('broadcast', fx),
  onCheckboxStateChange: (target, fx) => target.addEventListener('checkboxStateChange', fx),
  onHashchange: (target, fx) => target.addEventListener('hashchange', fx),
  onInput: (target, fx) => target.addEventListener('input', fx),
  onRadioStateChange: (target, fx) => target.addEventListener('radioStateChange', fx),
  onReadystatechange: (target, fx) => target.addEventListener('readystatechange', fx),
  onValueChange: (target, fx) => target.addEventListener('valueChange', fx),

  // SVG events
  onSVGAbort: (target, fx) => target.addEventListener('SVGAbort', fx),
  onSVGError: (target, fx) => target.addEventListener('SVGError', fx),
  onSVGLoad: (target, fx) => target.addEventListener('SVGLoad', fx),
  onSVGResize: (target, fx) => target.addEventListener('SVGResize', fx),
  onSVGScroll: (target, fx) => target.addEventListener('SVGScroll', fx),
  onSVGUnload: (target, fx) => target.addEventListener('SVGUnload', fx),
  onSVGZoom: (target, fx) => target.addEventListener('SVGZoom', fx),

  // Touch events
  onTouchcancel: (target, fx) => target.addEventListener('touchcancel', fx),
  onTouchend: (target, fx) => target.addEventListener('touchend', fx),
  onTouchmove: (target, fx) => target.addEventListener('touchmove', fx),
  onTouchstart: (target, fx) => target.addEventListener('touchstart', fx),

  // Pointer events
  onPointerover: (target, fx) => target.addEventListener('pointerover', fx),
  onPointerenter: (target, fx) => target.addEventListener('pointerenter', fx),
  onPointerdown: (target, fx) => target.addEventListener('pointerdown', fx),
  onPointermove: (target, fx) => target.addEventListener('pointermove', fx),
  onPointerup: (target, fx) => target.addEventListener('pointerup', fx),
  onPointercancel: (target, fx) => target.addEventListener('pointercancel', fx),
  onPointerout: (target, fx) => target.addEventListener('pointerout', fx),
  onPointerleave: (target, fx) => target.addEventListener('pointerleave', fx),
  onGotpointercapture: (target, fx) => target.addEventListener('gotpointercapture', fx),
  onLostpointercapture: (target, fx) => target.addEventListener('lostpointercapture', fx)
};

export default events;
