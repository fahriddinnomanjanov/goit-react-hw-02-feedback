(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(3),o=n.n(a),i=n(4),s=n(5),d=n(6),b=n(8),j=n(7),u=n(0);var l=function(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,a=e.posPercentage;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:["Good: ",t]}),Object(u.jsxs)("p",{children:["Neutral: ",n]}),Object(u.jsxs)("p",{children:["Bad: ",c]}),Object(u.jsxs)("p",{children:["Total: ",r]}),Object(u.jsxs)("p",{children:["Positive feedback: ",a,"%"]})]})})},h=function(e){var t=e.title,n=e.children;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:t}),n]})},O=function(e){var t=e.onLeaveFeedback;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{onClick:function(){return t("good")},children:"Good"}),Object(u.jsx)("button",{onClick:function(){return t("neutral")},children:"Neutral"}),Object(u.jsx)("button",{onClick:function(){return t("bad")},children:"Bad"})]})},x=function(e){var t=e.message;return Object(u.jsx)("h2",{children:t})},g=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.increase=function(t){e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=e.countTotalFeedback();return n?(t/n*100).toFixed(2):0},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,r=this.countTotalFeedback(),a=this.countPositiveFeedbackPercentage();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h,{title:"Please leave feedback",children:Object(u.jsx)(O,{onLeaveFeedback:this.increase})}),r>0?Object(u.jsx)(h,{title:"Statistics",children:Object(u.jsx)(l,{good:t,neutral:n,bad:c,total:r,posPercentage:a})}):Object(u.jsx)(x,{message:"No feedback given"})]})}}]),n}(c.Component);o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.77fbaaca.chunk.js.map