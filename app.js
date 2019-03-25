import {MDCRipple} from '@material/ripple/index';
import {MDCDrawer} from "@material/drawer";
import {MDCList} from "@material/list";

const ripple = new MDCRipple(document.querySelector('.foo-button'));

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));