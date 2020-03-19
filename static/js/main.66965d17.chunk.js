(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,a,t){e.exports={Container:"Button_Container__28qGM",Button:"Button_Button__39oNa"}},11:function(e,a,t){e.exports={Overlay:"Modal_Overlay__sCGY-",Modal:"Modal_Modal__2kDSQ"}},22:function(e,a,t){e.exports={App:"App_App__3R8QI"}},25:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__27xuN"}},26:function(e,a,t){e.exports={Container:"Loader_Container__1fRoj"}},28:function(e,a,t){},29:function(e,a,t){e.exports=t(74)},74:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(21),c=t.n(o),l=t(3),i=t(4),s=t(6),u=t(5),m=t(7),h=t(22),p=t.n(h),d=t(23),g=t.n(d),f=function(e,a){var t="https://pixabay.com/api/?q=".concat(e,"&page=").concat(a,"&key=").concat("14966503-8c2cc7e35fab5f49b5ff89f4d","&image_type=photo&orientation=horizontal&per_page=12");return g.a.get(t)},v=t(8),y=t.n(v),b=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={value:""},t.handleChange=function(e){var a=e.target.value;t.setState({value:a})},t.handleSubmit=function(e){e.preventDefault();var a=t.state.value;t.props.onSubmit(a),t.setState({value:""})},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement("header",{className:y.a.Searchbar},r.a.createElement("form",{className:y.a.SearchForm,onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:y.a.SearchFormButton},r.a.createElement("span",{className:y.a.SearchFormButtonLabel},"Search")),r.a.createElement("input",{value:e,onChange:this.handleChange,className:y.a.SearchFormInput,type:"text",placeholder:"Search images and photos"})))}}]),a}(n.Component),_=t(24),S=t(9),O=t.n(S),E=function(e){var a=e.image,t=a.key,n=a.smallUrl,o=e.onOpenModal;return r.a.createElement("div",null,r.a.createElement("li",{key:t,className:O.a.ImageGalleryItem,onClick:function(){return o(t)}},r.a.createElement("img",{src:n,alt:"",className:O.a.Image})))},I=t(25),k=t.n(I),C=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,a){e.images!==this.props.images&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.props,a=e.images,t=e.onOpenModal;return r.a.createElement("ul",{className:k.a.ImageGallery},a.map((function(e){return r.a.createElement(E,{key:Object(_.uuid)(),image:e,onOpenModal:t})})))}}]),a}(n.Component),j=(t(51),t(26)),M=t.n(j),L=t(27),w=t.n(L),N=function(){return r.a.createElement("div",{className:M.a.Container},r.a.createElement(w.a,{type:"Oval",color:"#1b6eb6",height:100,width:100,timeout:3e3}))},F=t(10),B=t.n(F),x=function(e){var a=e.onClick,t=e.isLoading;return r.a.createElement("div",{className:B.a.Container},t?r.a.createElement(N,null):r.a.createElement("button",{className:B.a.Button,onClick:a,type:"button"},"Load More"))},G=t(11),U=t.n(G),A=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).overlayRef=Object(n.createRef)(),t.handleKeyPress=function(e){"Escape"===e.code&&t.props.onCloseModal()},t.handleOverlayClick=function(e){var a=t.overlayRef.current;a&&e.target===a&&t.props.onCloseModal()},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){return r.a.createElement("div",{className:U.a.Overlay,ref:this.overlayRef,onClick:this.handleOverlayClick},r.a.createElement("div",{className:U.a.Modal},r.a.createElement("img",{src:this.props.modalImage,alt:""})))}}]),a}(n.Component),R=function(e){return e.map((function(e){return{key:e.id,smallUrl:e.webformatURL,largeUrl:e.largeImageURL}}))},D=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={images:[],searchQuery:"",page:1,modalImage:"",isLoading:!1,isModalOpen:!1},t.handleSearch=function(e){t.setState({searchQuery:e,page:1,images:[]})},t.getImagesData=function(e,a){t.setState({isLoading:!0}),f(e,a).then((function(e){var a=e.data;t.setState((function(e){return{images:e.images.concat(R(a.hits))}}))})).catch(console.log).finally((function(){return t.setState({isLoading:!1})}))},t.handleLoadButton=function(){t.setState((function(e){return{page:e.page+1}}))},t.openModal=function(e){var a=t.state.images.find((function(a){return a.key===e})).largeUrl;t.setState({isModalOpen:!0,modalImage:a})},t.closeModal=function(){t.setState({isModalOpen:!1})},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,a){var t=this.state,n=t.searchQuery,r=t.page;a.page===r&&a.searchQuery===n||this.getImagesData(n,r)}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.isLoading,n=e.isModalOpen,o=e.modalImage;return r.a.createElement("div",{className:p.a.App},r.a.createElement(b,{onSubmit:this.handleSearch}),t&&r.a.createElement(N,null),!!a.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{images:a,onOpenModal:this.openModal}),r.a.createElement(x,{onClick:this.handleLoadButton,isLoading:t})),n&&r.a.createElement(A,{onCloseModal:this.closeModal,modalImage:o}))}}]),a}(n.Component),Q=t(28),K=t.n(Q);c.a.render(r.a.createElement(D,{className:K.a}),document.getElementById("root"))},8:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__Kd6jA",SearchForm:"Searchbar_SearchForm__2JICl",SearchFormButton:"Searchbar_SearchFormButton__1Lc6o",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3-M0o",SearchFormInput:"Searchbar_SearchFormInput__1ohLg","SearchForm-input":"Searchbar_SearchForm-input__tNU1p"}},9:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__shZnH",Image:"ImageGalleryItem_Image__xDTbR"}}},[[29,1,2]]]);
//# sourceMappingURL=main.66965d17.chunk.js.map