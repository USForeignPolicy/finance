(this.webpackJsonpfinance=this.webpackJsonpfinance||[]).push([[7],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return i}));var a=new window.Intl.NumberFormat(void 0,{maximumFractionDigits:2}),l=["","K","M","B","T"],r={format(e,t){if(null===e||0===e)return"0";t=!t||t<0?0:t;var n=e.toPrecision(2).split("e"),r=1===n.length?0:Math.floor(Math.min(parseInt(n[1].slice(1),10),14)/3),s=(r<0?r:Math.abs(r))<1?e.toFixed(0+t):(e/Math.pow(10,3*r)).toFixed(1+t);return"".concat(a.format(s)).concat(l[r])}},s=new window.Intl.NumberFormat(void 0,{maximumFractionDigits:2,minimumFractionDigits:2}),o=new window.Intl.NumberFormat(void 0,{maximumFractionDigits:3,minimumFractionDigits:3}),i=new window.Intl.NumberFormat(void 0,{maximumFractionDigits:2,minimumFractionDigits:2,style:"percent"})},121:function(e,t,n){},123:function(e,t,n){"use strict";var a=n(41),l=n(42),r=n(44),s=n(43),o=n(1),i=n(6),c=n(19),m=n(133),d=n(129),u=n.n(d);function p(e){var t=o.useState(!1),n=Object(m.a)(t,2),a=n[0],l=n[1],r=o.useRef(null);return o.createElement("div",{className:"card"},o.createElement("div",{className:"card-body"},o.createElement(i.e,{action:"/api",method:"post",onSubmit:function(t){t.preventDefault();var n=u()(t.currentTarget,{hash:!0});e.onAddSymbol&&e.onAddSymbol(n),null!=r.current&&r.current.reset()},innerRef:r},o.createElement(i.f,null,o.createElement(i.h,{for:"symbol"},"Symbol"),o.createElement(i.g,{autoComplete:"off",bsSize:"sm",id:"symbol",name:"symbol",required:!0})),a?o.createElement(i.f,null,o.createElement(i.a,{color:"link",onClick:function(){l(!1)},size:"sm",type:"button"},"- Remove transaction data")):o.createElement(i.f,null,o.createElement(i.a,{color:"link",onClick:function(){l(!0)},size:"sm",type:"button"},"+ Add transaction data")),o.createElement(i.c,{isOpen:a},o.createElement(i.f,null,o.createElement(i.h,{for:"type"},"Type"),o.createElement(i.g,{bsSize:"sm",className:"form-control",disabled:!a,id:"type",name:"type",required:!0,type:"select"},o.createElement("option",null,"Buy"),o.createElement("option",null,"Sell"))),o.createElement(i.f,null,o.createElement(i.h,{for:"shares"},"Shares"),o.createElement(i.g,{bsSize:"sm",disabled:!a,id:"shares",min:"0",name:"shares",required:!0,step:".001",type:"number"})),o.createElement(i.f,null,o.createElement(i.h,{for:"price"},"Price/Amount"),o.createElement(i.g,{bsSize:"sm",disabled:!a,id:"price",min:"0",name:"price",step:".01",type:"number"})),o.createElement(i.f,null,o.createElement(i.h,{for:"date"},"Date ",o.createElement("small",{className:"text-secondary"},"(Optional)")),o.createElement(i.g,{bsSize:"sm",disabled:!a,id:"date",name:"date",type:"date"})),o.createElement(i.f,null,o.createElement(i.h,{for:"commission"},"Commission ",o.createElement("small",{className:"text-secondary"},"(Optional)")),o.createElement(i.g,{bsSize:"sm",disabled:!a,id:"commission",min:"0",name:"commission",step:".01",type:"number"}))),o.createElement(i.f,{style:{marginBottom:0}},o.createElement(i.a,{color:"primary",disabled:e.isLoading,size:"sm",type:"submit"},"Add to portfolio")))))}function h(e){return o.createElement(i.b,{className:"text-right"},o.createElement(i.a,{color:"link",size:"sm",type:"button"},o.createElement(i.h,{className:"label-button"},o.createElement(i.g,{accept:"text/csv",hidden:!0,onChange:function(t){var n=t.currentTarget,a=n.files;null!=a&&0!==a.length&&(e.onImportPortfolio(a[0]),n.value="")},type:"file"}),"Import transactions")),"|",o.createElement(i.a,{color:"link",onClick:e.onDeletePortfolio,size:"sm",type:"button"},"Delete portfolio"),"|",o.createElement(i.a,{color:"link",onClick:e.onDownloadPortfolio,size:"sm",type:"button"},"Download to spreadsheet"))}n(121);var f=n(23);function b(){return o.createElement("div",{className:"bg-light shadow-sm nav-scroller"},o.createElement(i.l,{className:"nav-portfolio",role:"navigation"},o.createElement(i.m,null,o.createElement(f.c,{className:"nav-link",exact:!0,to:"/"},"Overview")),o.createElement(i.m,null,o.createElement(f.c,{className:"nav-link",to:"/performance"},"Performance")),o.createElement(i.m,null,o.createElement(f.c,{className:"nav-link",to:"/transactions"},"Transactions"))))}var g=n(15),E=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var l=arguments.length,r=new Array(l),s=0;s<l;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleAddSymbol=function(t){var n={cashValue:null,commission:parseFloat(t.commission)||0,date:t.date,id:-1,notes:null,price:parseFloat(t.price)||0,shares:parseFloat(t.shares)||0,symbol:t.symbol.toUpperCase(),type:t.type||"Buy"};e.props.dispatch(Object(c.a)(n)),e.props.dispatch(Object(c.h)())},e.handleDeletePortfolio=function(){window.confirm("Are you sure you want to delete the entire portfolio? This is irreversible.")&&e.props.dispatch(Object(c.c)())},e.handleDownloadPortfolio=function(){e.props.dispatch(Object(c.f)())},e.handleImportPortfolio=function(t){e.props.dispatch(Object(c.j)(t))},e}return Object(l.a)(n,[{key:"render",value:function(){return o.createElement(o.Fragment,null,o.createElement(b,null),o.createElement(i.d,{className:"mb-4"},o.createElement(i.q,{className:"mb-3 mt-3"},o.createElement(i.b,null,o.createElement(i.a,{color:this.props.deleteDisabled?"secondary":"danger",disabled:this.props.deleteDisabled,onClick:this.props.onDelete,outline:!0,size:"sm"},"Delete")),o.createElement(h,{onDeletePortfolio:this.handleDeletePortfolio,onDownloadPortfolio:this.handleDownloadPortfolio,onImportPortfolio:this.handleImportPortfolio})),this.props.children,o.createElement(i.q,null,o.createElement(i.b,{md:"6"},o.createElement(p,{isLoading:this.props.isLoading,onAddSymbol:this.handleAddSymbol})))))}}]),n}(o.Component);t.a=Object(g.b)((function(e){return{isLoading:e.isFetchingCount>0}}))(E)},255:function(e,t,n){"use strict";n.r(t);var a=n(3),l=n(128),r=n(41),s=n(42),o=n(44),i=n(43),c=n(1),m=n(6),d=n(19),u=n(118),p=n(23),h=n(123),f=n(132),b=n(15),g=n(130),E=n.n(g)()(f.a),v=[{accessor:"companyName",Cell:function(e){return null==e.value?"...":e.value},Header:"Name",headerClassName:"text-left"},{accessor:"symbol",Cell:function(e){return c.createElement(p.b,{to:"/stocks/".concat(e.value)},e.value)},Header:"Symbol",headerClassName:"text-left"},{accessor:"type",Header:"Type",headerClassName:"text-left"},{accessor:"date",Cell:function(e){return c.createElement("time",null,e.value)},Header:"Date",headerClassName:"text-left"},{accessor:"shares",Cell:function(e){return c.createElement("div",{className:"text-right"},null==e.value?"...":u.c.format(e.value))},Header:"Shares",headerClassName:"text-right"},{accessor:"price",Cell:function(e){return c.createElement("div",{className:"text-right"},null==e.value?"...":u.b.format(e.value))},Header:"Price",headerClassName:"text-right"},{accessor:"commission",Cell:function(e){return c.createElement("div",{className:"text-right"},null==e.value?"...":u.b.format(e.value))},Header:"Commission",headerClassName:"text-right"}],y=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).handleDeleteSelectedTransactions=function(){var e=a.props.transactions.filter((function(e){return a.state.selectedTransactionIds.has(e.id)}));a.props.dispatch(Object(d.e)(e))},a.handlePageSizeChange=function(e){a.props.dispatch(Object(d.b)(e))},a.handleToggleAllTransactionIds=function(e){a.isAllTransactionIdsSelected()?a.setState({selectedTransactionIds:new Set}):a.setState({selectedTransactionIds:new Set(a.props.transactions.map((function(e){return e.id})))})},a.handleToggleTransactionIdSelected=function(e){a.isTransactionIdSelected(e)?a.state.selectedTransactionIds.delete(e):a.state.selectedTransactionIds.add(e),a.forceUpdate()},a.isAllTransactionIdsSelected=function(){return a.state.selectedTransactionIds.size===a.props.transactions.length},a.isTransactionIdSelected=function(e){return a.state.selectedTransactionIds.has(e)},a.state={selectedTransactionIds:new Set},a}return Object(s.a)(n,null,[{key:"getDerivedStateFromProps",value:function(e,t){var n,a=!1,r=new Set(e.transactions),s=new Set,o=Object(l.a)(t.selectedTransactionIds);try{for(o.s();!(n=o.n()).done;){var i=n.value;r.has(i)?s.add(i):a=!0}}catch(c){o.e(c)}finally{o.f()}return a?{selectedTransactionIds:s}:null}}]),Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.transactions.map((function(t){var n=e.props.quotes[t.symbol];return Object(a.a)(Object(a.a)({},t),{},{companyName:null==n?null:n.companyName})})),n=0===this.props.transactions.length||0===this.state.selectedTransactionIds.size;return c.createElement(h.a,{deleteDisabled:n,onDelete:this.handleDeleteSelectedTransactions},c.createElement(m.q,{className:"mb-3"},c.createElement(m.b,null,c.createElement(E,{columns:v,data:t,defaultSorted:[{desc:!1,id:"symbol"}],getPaginationProps:function(){return{className:"pt-2",NextComponent:function(e){return c.createElement(m.a,Object.assign({className:"btn-sm",outline:!0},e))},PreviousComponent:function(e){return c.createElement(m.a,Object.assign({className:"btn-sm",outline:!0},e))},showPageJump:!1}},isSelected:this.isTransactionIdSelected,keyField:"id",noDataText:"No transactions yet. Add one using the form below.",onPageSizeChange:this.handlePageSizeChange,pageSize:this.props.appSettings.pageSize,selectAll:this.isAllTransactionIdsSelected(),selectType:"checkbox",toggleAll:this.handleToggleAllTransactionIds,toggleSelection:this.handleToggleTransactionIdSelected}))))}}]),n}(c.Component);t.default=Object(b.b)((function(e){return{appSettings:e.appSettings,quotes:e.quotes,transactions:e.transactions}}))(y)}}]);
//# sourceMappingURL=7.949ad37d.chunk.js.map