var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},l=e.parcelRequired870;null==l&&((l=function(e){if(e in s)return s[e].exports;if(e in i){var l=i[e];delete i[e];var t={id:e,exports:{}};return s[e]=t,l.call(t.exports,t,t.exports),t.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,s){i[e]=s},e.parcelRequired870=l);var t=l("6TDp9"),n=l("1CpbH"),o=l("bnlKQ"),r=l("3ILHO");r.zeroPlus.addEventListener("click",(async function(e=1){try{const s=await(0,t.getPopularForKidsZero)(e),{results:i}=s.data,l=(0,n.getGenreOptions)()??[],a=(0,o.makeMovieList)(i,l);r.listRef.innerHTML=a}catch(e){console.log(e)}r.zeroPlus.disabled=!0,r.sixPlus.disabled=!1,r.twelvePlus.disabled=!1})),r.sixPlus.addEventListener("click",(async function(e=1){try{const s=await(0,t.getPopularForKidsSix)(e),{results:i}=s.data,l=(0,n.getGenreOptions)()??[],a=(0,o.makeMovieList)(i,l);r.listRef.innerHTML=a}catch(e){console.log(e)}r.zeroPlus.disabled=!1,r.sixPlus.disabled=!0,r.twelvePlus.disabled=!1})),r.twelvePlus.addEventListener("click",(async function(e=1){try{const s=await(0,t.getPopularForKidsTwelve)(e),{results:i}=s.data,l=(0,n.getGenreOptions)()??[],a=(0,o.makeMovieList)(i,l);r.listRef.innerHTML=a}catch(e){console.log(e)}r.zeroPlus.disabled=!1,r.sixPlus.disabled=!1,r.twelvePlus.disabled=!0}));
//# sourceMappingURL=kids.19cb3532.js.map