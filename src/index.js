import _ from 'lodash'
import CorespringNg15Element from 'corespring-legacy-component-dependencies/support/corespring-ng15-element'
import 'corespring-legacy-ordering'

export default class CorespringOrderingNg15Element extends CorespringNg15Element {
  _legacyHtml(){
    return '<ordering id="' + this.getAttribute('pie-id') + '"></ordering>';
  }
}


