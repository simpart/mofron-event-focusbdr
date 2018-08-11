/**
 * @file mofron-event-focusbdr/index.js
 * @author simpart
 */
const mf    = require('mofron');
const Focus = require('mofron-event-focus');

/**
 * @class mofron.event.FocusBdr
 * @brief focus border event class for component
 */
mf.event.FocusBdr = class extends Focus {
    
    constructor (po, p2) {
        try {
            super();
            this.name('focusbdr');
            this.m_border = {
                'border-color' : 'black',
                'border-width' : '1px',
                'border-style' : 'solid'
            };
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (tgt_dom) {
        try {
           super.contents(tgt_dom);
           if (null === this.handler()[0]) {
               super.handler(this.border());
           }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    border (clr, wid) {
        try {
            if ((undefined === clr) && (undefined === wid)) {
                /* getter */
                return (flg,cmp) => {
                    try {
                        if (true === flg) {
                            cmp.execOption({
                                style : this.m_border
                            });
                        } else {
                            let set_style = {};
                            for (let bidx in this.m_border) {
                                set_style[bidx] = null;
                            }
                            cmp.execOption({
                                style : set_style
                            });
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }
            }
            /* setter */
            if (true === mf.func.isInclude(clr, 'Color')) {
                this.m_border['border-color'] = clr.getStyle();
            }
            if ('string' === typeof wid) {
                this.m_border['border-width'] = wid;
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    handler (fnc, prm) {
        try {
            if (undefined === fnc) {
                /* getter */
                return super.handler();
            }
            /* setter */
            let bdr = this.border();
            super.hander(
                (flg, cmp, prm) => {
                    try {
                        bdr(flg, cmp);
                        fnc(flg, cmp, prm);
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                prm
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.event.FocusBdr;
/* end of file */
