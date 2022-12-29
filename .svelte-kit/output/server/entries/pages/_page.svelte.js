import { c as create_ssr_component, d as compute_rest_props, f as spread, h as escape_object, i as escape_attribute_value, b as subscribe, v as validate_component, e as escape, j as null_to_empty } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index2.js";
const MicrophoneSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { ariaLabel = "microphone" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { fill: escape_attribute_value(color) },
      {
        class: escape_attribute_value($$props.class)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 384 512" }
    ],
    {}
  )}><path d="${"M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"}"></path></svg>`;
});
const CopyRegular = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { ariaLabel = "copy" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { fill: escape_attribute_value(color) },
      {
        class: escape_attribute_value($$props.class)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 512 512" }
    ],
    {}
  )}><path d="${"M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z"}"></path></svg>`;
});
const anim = writable("");
const lang = writable("en");
const country = writable("IN");
const results = writable("");
const Inputs_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".input.svelte-4khieh{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin:0% 6%}.selects.svelte-4khieh{display:flex;flex-direction:row}select.svelte-4khieh{width:14em;height:2.5em;font-family:'inter';margin:0.3em}button.svelte-4khieh{width:10em;height:2.5em;margin:0.3em;display:flex;justify-content:space-between;align-items:center;font-family:'Inter';font-weight:600}button.svelte-4khieh:active{transform:scale(0.95);box-shadow:2px 2px 5px black}@media only screen and (max-width: 600px){.input.svelte-4khieh{flex-direction:column}.selects.svelte-4khieh{flex-direction:column}}",
  map: null
};
const Inputs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_results;
  $$unsubscribe_results = subscribe(results, (value) => value);
  $$result.css.add(css$3);
  $$unsubscribe_results();
  return `<div class="${"input svelte-4khieh"}"><div class="${"selects svelte-4khieh"}"><div class="${"droplan"}"><select id="${"Language"}" class="${"svelte-4khieh"}"><option value="${"en"}">English</option><option value="${"hi"}">हिन्दी</option><option value="${"te"}">తెలుగు</option><option value="${"mr"}">मराठी</option><option value="${"kn"}">ಕನ್ನಡ</option><option value="${"ta"}">தமிழ்</option><option value="${"ml"}">മലയാളം</option></select></div>
		<div class="${"dropcont"}"><select id="${"Country"}" class="${"svelte-4khieh"}"><option value="${"IN"}">India</option><option value="${"AU"}">Australia</option><option value="${"US"}">United States</option><option value="${"UK"}">United kingdom</option><option value="${"SA"}">South Africa</option><option value="${"CA"}">Canada</option><option value="${"KE"}">Kenya</option><option value="${"TZ"}">Tanzania</option><option value="${"GH"}">Ghana</option><option value="${"NZ"}">New Zealand</option><option value="${"NG"}">Nigeria</option><option value="${"PH"}">Philippines</option></select></div></div>
	<div><button type="${"button"}" class="${"btn btn-primary svelte-4khieh"}">${validate_component(CopyRegular, "CopyRegular").$$render($$result, { size: "20" }, {}, {})}Click to Copy</button></div>
</div>`;
});
const Functionality_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "textarea.svelte-fdaq11{width:88%;height:10em;margin:2% 6% 2% 6%;border-radius:1%;border-color:black;box-shadow:0.2em 0.2em 5px rgb(169, 169, 169);resize:none;font-family:'Inter';font-size:1em;padding:1em}.mic-circle.svelte-fdaq11{display:flex;align-items:center;justify-content:center;border-radius:100%;width:4em;height:4em;background-color:#0066ff;margin:auto;border:none}@keyframes svelte-fdaq11-flickerAnimation{0%{opacity:1}50%{opacity:0}100%{opacity:1}}.animate-flicker.svelte-fdaq11{animation:svelte-fdaq11-flickerAnimation 1s infinite}",
  map: null
};
const Functionality = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_country;
  let $$unsubscribe_lang;
  let $anim, $$unsubscribe_anim;
  let $results, $$unsubscribe_results;
  $$unsubscribe_country = subscribe(country, (value) => value);
  $$unsubscribe_lang = subscribe(lang, (value) => value);
  $$unsubscribe_anim = subscribe(anim, (value) => $anim = value);
  $$unsubscribe_results = subscribe(results, (value) => $results = value);
  $$result.css.add(css$2);
  $$unsubscribe_country();
  $$unsubscribe_lang();
  $$unsubscribe_anim();
  $$unsubscribe_results();
  return `<button id="${"speech"}" class="${"mic-circle svelte-fdaq11"}"><div class="${escape(null_to_empty($anim), true) + " svelte-fdaq11"}">${validate_component(MicrophoneSolid, "MicrophoneSolid").$$render($$result, { size: "40", color: "white" }, {}, {})}</div></button>
<textarea name="${""}" id="${"output"}" cols="${"30"}" rows="${"10"}" class="${"svelte-fdaq11"}">${escape($results, true)}</textarea>`;
});
const Description_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".heading.svelte-12amf4g{font-family:'Inter';font-size:4.5em;font-weight:800;text-align:center;line-height:1em;margin:3% 0%}.description.svelte-12amf4g{font-family:'Inter';font-size:1.5em;color:gray;font-weight:600;margin-bottom:1em}",
  map: null
};
const Description_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $anim, $$unsubscribe_anim;
  $$unsubscribe_anim = subscribe(anim, (value) => $anim = value);
  $$result.css.add(css$1);
  $$unsubscribe_anim();
  return `<div class="${"d-flex flex-column "}"><div class="${"heading d-flex justify-content-center svelte-12amf4g"}">Speech <br> Recognition</div>
	<div class="${"description d-flex justify-content-center svelte-12amf4g"}">${$anim == "" ? `Click on the microphone icon and start speaking!` : `Listening, tap the microphone to cancel!`}</div>
</div>`;
});
const Navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: ".navbar.svelte-bd9ohv{position:relative;box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset}.navbar.svelte-bd9ohv::before,.navbar.svelte-bd9ohv::after{content:'';position:absolute;z-index:-1;box-shadow:0 0 20px rgba(0, 0,0, 0.8);bottom:0;left:10px;right:10px;border-radius:100px / 10px}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="${"navbar FFFFFF sticky-top svelte-bd9ohv"}"><div class="${"container-fluid"}"><span class="${"d-flex justify-content-start"}"><button class="${"navbar-toggler"}" type="${"button"}" data-bs-toggle="${"offcanvas"}" data-bs-target="${"#offcanvasNavbar"}" aria-controls="${"offcanvasNavbar"}"><span class="${"navbar-toggler-icon"}"></span></button>
			<a class="${"navbar-brand"}" href="${"/"}" style="${"color:#1D63E9; font-size: 38.88;font-family:inter"}">DEVELOPERSTAR</a></span>
		
		

		<span class="${"d-flex justify-content-end"}" style="${"font-size:24.55; font-family:inter"}"><a href="${"/"}" class="${"nav-link px-1"}">Help</a>
			<a href="${"/"}" class="${"nav-link px-1"}">Download</a>
            <a href="${"/"}" class="${"nav-link px-1"}"><img src="${"icon.jpg"}" alt="${"userImage"}" height="${"30px"}" width="${"30px"}"></a></span>
		
		<div class="${"offcanvas offcanvas-start"}" tabindex="${"-1"}" id="${"offcanvasNavbar"}" aria-labelledby="${"offcanvasNavbarLabel"}"><div class="${"offcanvas-header"}"><h5 class="${"offcanvas-title"}" id="${"offcanvasNavbarLabel"}">DEVELOPERSTAR</h5>
				<button type="${"button"}" class="${"btn-close"}" data-bs-dismiss="${"offcanvas"}" aria-label="${"Close"}"></button></div>
			<div class="${"offcanvas-body"}"><ul class="${"navbar-nav justify-content-end flex-grow-1 pe-3"}"><li class="${"nav-item"}"><a class="${"nav-link active"}" aria-current="${"page"}" href="${"/"}">Home</a></li>
					<li class="${"nav-item"}"><a class="${"nav-link"}" href="${"/"}">Link</a></li>
					<li class="${"nav-item dropdown"}"><a class="${"nav-link dropdown-toggle"}" href="${"/"}" role="${"button"}" data-bs-toggle="${"dropdown"}" aria-expanded="${"false"}">Dropdown
						</a>
						<ul class="${"dropdown-menu"}"><li><a class="${"dropdown-item"}" href="${"/"}">Action</a></li>
							<li><a class="${"dropdown-item"}" href="${"/"}">Another action</a></li>
							<li><hr class="${"dropdown-divider"}"></li>
							<li><a class="${"dropdown-item"}" href="${"/"}">Something else here</a></li></ul></li></ul>
				<form class="${"d-flex mt-3"}" role="${"search"}"><input class="${"form-control me-2"}" type="${"search"}" placeholder="${"Search"}" aria-label="${"Search"}">
					<button class="${"btn btn-outline-success"}" type="${"submit"}">Search</button></form></div></div></div>
</nav>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-124wzif_START --><link href="${"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"}" rel="${"stylesheet"}" integrity="${"sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"}" crossorigin="${"anonymous"}"><script src="${"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"}" integrity="${"sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"}" crossorigin="${"anonymous"}"><\/script><link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin="${"anonymous"}"><link href="${"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"}" rel="${"stylesheet"}"><script src="${"./sR.js"}"><\/script><!-- HEAD_svelte-124wzif_END -->`, ""}
<div class="${"d-flex flex-column justify-content-center "}">${validate_component(Navbar, "NavBar").$$render($$result, {}, {}, {})}
	${validate_component(Description_1, "Description").$$render($$result, {}, {}, {})} 
	${validate_component(Functionality, "Functionality").$$render($$result, {}, {}, {})} 
	${validate_component(Inputs, "Inputs").$$render($$result, {}, {}, {})} 
</div>`;
});
export {
  Page as default
};
