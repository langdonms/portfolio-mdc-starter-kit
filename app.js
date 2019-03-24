import {MDCRipple} from '@material/ripple/index';
import {MDCList} from "@material/list";

const ripple = new MDCRipple(document.querySelector('.foo-button'));

const list = MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;