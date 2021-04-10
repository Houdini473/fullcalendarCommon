// / <reference types="@fullcalendar/core-preact" />
if (typeof FullCalendarVDom === "undefined") {
  throw new Error(
    "Please import the top-level fullcalendar lib before attempting to import a plugin."
  );
}
var Component = FullCalendarVDom.Component;
var createElement = FullCalendarVDom.createElement;
var render = FullCalendarVDom.render;
var createRef = FullCalendarVDom.createRef;
var Fragment = FullCalendarVDom.Fragment;
var createContext = FullCalendarVDom.createContext;
var flushToDom = FullCalendarVDom.flushToDom;
var unmountComponentAtNode = FullCalendarVDom.unmountComponentAtNode;

export {
  Component,
  Fragment,
  createContext,
  createElement,
  createRef,
  flushToDom,
  render,
  unmountComponentAtNode,
};
