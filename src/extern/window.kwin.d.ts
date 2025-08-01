interface Window {
  readonly bufferGeometry: QRect;
  readonly clientGeometry: QRect;
  readonly pos: QPoint;
  readonly size: QSize;
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  readonly output: Output;
  readonly rect: QRect;
  readonly resourceName: string;
  readonly resourceClass: string;
  readonly windowRole: string;
  readonly desktopWindow: boolean;
  readonly dock: boolean;
  readonly toolbar: boolean;
  readonly menu: boolean;
  readonly normalWindow: boolean;
  readonly dialog: boolean;
  readonly splash: boolean;
  readonly utility: boolean;
  readonly dropdownMenu: boolean;
  readonly popupMenu: boolean;
  readonly tooltip: boolean;
  readonly notification: boolean;
  readonly criticalNotification: boolean;
  readonly appletPopup: boolean;
  readonly onScreenDisplay: boolean;
  readonly comboBox: boolean;
  readonly dndIcon: boolean;
  readonly windowType: number;
  readonly managed: boolean;
  readonly deleted: boolean;
  readonly popupWindow: boolean;
  readonly outline: boolean;
  readonly internalId: QUuid;
  readonly pid: number;
  readonly stackingOrder: number;
  readonly fullScreenable: boolean;
  readonly active: boolean;
  readonly closeable: boolean;
  readonly shadeable: boolean;
  readonly minimizable: boolean;
  readonly iconGeometry: QRect;
  readonly specialWindow: boolean;
  readonly caption: string;
  readonly minSize: QSize;
  readonly maxSize: QSize;
  readonly transient: boolean;
  readonly transientFor: Window;
  readonly modal: boolean;
  readonly move: boolean;
  readonly resize: boolean;
  readonly decorationHasAlpha: boolean;
  readonly providesContextHelp: boolean;
  readonly maximizable: boolean;
  readonly maximizeMode: MaximizeMode;
  readonly moveable: boolean;
  readonly moveableAcrossScreens: boolean;
  readonly resizeable: boolean;
  readonly desktopFileName: string;
  readonly hasApplicationMenu: boolean;
  readonly applicationMenuActive: boolean;
  readonly unresponsive: boolean;
  readonly colorScheme: string;
  readonly hidden: boolean;
  readonly inputMethod: boolean;

  opacity: number;
  skipsCloseAnimation: boolean;
  fullScreen: boolean;
  desktops: VirtualDesktop[];
  onAllDesktops: boolean;
  activities: string[];
  skipTaskbar: boolean;
  skipPager: boolean;
  skipSwitcher: boolean;
  keepAbove: boolean;
  keepBelow: boolean;
  shade: boolean;
  minimized: boolean;
  demandsAttention: boolean;
  frameGeometry: QRect;
  noBorder: boolean;
  tile: Tile;

  // Signals
  stackingOrderChanged: QSignal;
  shadeChanged: QSignal;
  opacityChanged: QSignal;
  damaged: QSignal;
  inputTransformationChanged: QSignal;
  closed: QSignal;
  windowShown: QSignal;
  windowHidden: QSignal;
  outputChanged: QSignal;
  skipCloseAnimationChanged: QSignal;
  windowRoleChanged: QSignal;
  windowClassChanged: QSignal;
  surfaceChanged: QSignal;
  shadowChanged: QSignal;
  bufferGeometryChanged: QSignal;
  frameGeometryChanged: QSignal;
  clientGeometryChanged: QSignal;
  frameGeometryAboutToChange: QSignal;
  visibleGeometryChanged: QSignal;
  tileChanged: QSignal;
  fullScreenChanged: QSignal;
  skipTaskbarChanged: QSignal;
  skipPagerChanged: QSignal;
  skipSwitcherChanged: QSignal;
  iconChanged: QSignal;
  activeChanged: QSignal;
  keepAboveChanged: QSignal;
  keepBelowChanged: QSignal;
  demandsAttentionChanged: QSignal;
  desktopsChanged: QSignal;
  activitiesChanged: QSignal;
  minimizedChanged: QSignal;
  paletteChanged: QSignal;
  colorSchemeChanged: QSignal;
  captionChanged: QSignal;
  captionNormalChanged: QSignal;
  maximizedAboutToChange: QSignal;
  maximizedChanged: QSignal;
  transientChanged: QSignal;
  modalChanged: QSignal;
  quickTileModeChanged: QSignal;
  moveResizedChanged: QSignal;
  moveResizeCursorChanged: QSignal;
  interactiveMoveResizeStarted: QSignal;
  interactiveMoveResizeStepped: QSignal;
  interactiveMoveResizeFinished: QSignal;
  closeableChanged: QSignal;
  minimizeableChanged: QSignal;
  shadeableChanged: QSignal;
  maximizeableChanged: QSignal;
  desktopFileNameChanged: QSignal;
  applicationMenuChanged: QSignal;
  hasApplicationMenuChanged: QSignal;
  applicationMenuActiveChanged: QSignal;
  unresponsiveChanged: QSignal;
  decorationChanged: QSignal;
  hiddenChanged: QSignal;
  hiddenByShowDesktopChanged: QSignal;
  lockScreenOverlayChanged: QSignal;
  readyForPaintingChanged: QSignal;
  maximizeGeometryRestoreChanged: QSignal;
  fullscreenGeometryRestoreChanged: QSignal;

  // functions
  closeWindow(): void;
  setMaximize(vertically: boolean, horizontally: boolean): void;
}
