(this.webpackJsonprandomquotesreact=this.webpackJsonprandomquotesreact||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o(1),i=o.n(a),s=o(4),r=o.n(s),c=(o(14),o(5)),u=o(6),h=o(2),l=o(8),d=o(7),y=[["On no given day can my horse make big progress, but on any given day, my horse can see big deterioration.","Denny Emerson"],["The horse will teach you if you will listen.","Ray Hunt"],["Don\u2019t do too much at once. Do a little bit often.","Ray Hunt"],["You don\u2019t make him learn, you set it up to allow him to learn. You have to give him dignity. Once you start giving you won\u2019t believe how much you get back.","Ray Hunt"],["If you always do what you\u2019ve always done you\u2019ll always get what you\u2019ve always got.","Pat Parelli"],["Never knock the curiosity out of a young horse.","Tom Dorrance"],["The horse responds to comfort, they respond to peace better than about anything else you could do. So if the horse responds to you and you give him a little peace and comfort that means more to him than anything.","Buck Brannaman"],["If you take the time it takes it takes less time.","Pat Parelli"],["When a horse understands what you want, he will do what that is, right up to the limit of his physical capability... and sometimes well beyond that.","Bill Dorrance"],["The greatest strength a man can achieve is gentleness.","Monty Roberts"]],b=function(t){Object(l.a)(o,t);var e=Object(d.a)(o);function o(t){var n;return Object(c.a)(this,o),(n=e.call(this,t)).state={quoteDisp:"",randomIndex:"",link:'"http://www.twitter.com/intent/tweet?text=',quoteLink:""},n.randomQuote=n.randomQuote.bind(Object(h.a)(n)),n}return Object(u.a)(o,[{key:"randomQuote",value:function(){var t=Math.floor(10*Math.random());this.setState({quoteDisp:y[t][0]}),this.setState({authorDisp:y[t][1]}),this.setState({link:"http://www.twitter.com/intent/tweet?text="+encodeURI(y[t][0])+"  \u2013 "+y[t][1]})}},{key:"componentDidMount",value:function(){this.randomQuote(),document.title="Cowboy Logic"}},{key:"render",value:function(){return Object(n.jsx)("div",{id:"display-box",children:Object(n.jsx)("div",{id:"quote-bundle",children:Object(n.jsxs)("wrapper",{id:"quote-box",class:"quote-box",children:[Object(n.jsx)("h1",{children:"Cowboy Logic"}),Object(n.jsx)("p",{class:"quote",id:"text",children:this.state.quoteDisp}),Object(n.jsxs)("p",{class:"author",id:"author",children:["\u2014 ",this.state.authorDisp]}),Object(n.jsx)("button",{class:"button",id:"new-quote",onClick:this.randomQuote,children:"Generate Different Quote"}),Object(n.jsx)("p",{class:"author",children:Object(n.jsx)("a",{target:"_blank",id:"tweet-quote",href:this.state.link,children:"Tweet this quote"})}),Object(n.jsx)("script",{src:"https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"})]})})})}}]),o}(i.a.Component),m=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,16)).then((function(e){var o=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;o(t),n(t),a(t),i(t),s(t)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.d45657eb.chunk.js.map