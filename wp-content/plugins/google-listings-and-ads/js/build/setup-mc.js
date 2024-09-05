"use strict";(globalThis.webpackChunkgoogle_listings_and_ads=globalThis.webpackChunkgoogle_listings_and_ads||[]).push([[735],{3919:(e,t,n)=>{n.d(t,{NS:()=>g,RO:()=>u,Me:()=>m,Ay:()=>h});var o=n(1609),a=n(7723),s=n(6427),i=n(6087),l=n(9457),r=n(7892),c=n(7792),d=n(8582);const u="all-accounts",g="ads-account",m="api-data-fetch-feature",p={[u]:{title:(0,a.__)("Disconnect all accounts","google-listings-and-ads"),confirmButton:(0,a.__)("Disconnect all accounts","google-listings-and-ads"),confirmation:(0,a.__)("Yes, I want to disconnect all my accounts.","google-listings-and-ads"),contents:[(0,a.__)("I understand that I am disconnecting any WordPress.com account, Google account, Google Merchant Center account and Google Ads account connected to this extension.","google-listings-and-ads"),(0,a.__)("Any active product listings will continue to show on Google. They can be managed, edited, or deleted manually from Google Merchant Center (merchants.google.com).","google-listings-and-ads"),(0,a.__)("Any ongoing paid campaigns will continue to run. They can be managed, edited, or deleted manually from Google Ads (ads.google.com).","google-listings-and-ads")]},[g]:{title:(0,a.__)("Disconnect Google Ads account","google-listings-and-ads"),confirmButton:(0,a.__)("Disconnect Google Ads Account","google-listings-and-ads"),confirmation:(0,a.__)("Yes, I want to disconnect my Google Ads account.","google-listings-and-ads"),contents:[(0,a.__)("I understand that I am disconnecting my Google Ads account from this WooCommerce extension.","google-listings-and-ads"),(0,a.__)("Any ongoing paid campaigns will continue to run. They can be managed, edited, or deleted manually from Google Ads (ads.google.com).","google-listings-and-ads"),(0,a.__)("Some configurations for Google Ads created through WooCommerce may be lost. This cannot be undone.","google-listings-and-ads")]},[m]:{title:(0,a.__)("Disable data fetching","google-listings-and-ads"),confirmButton:(0,a.__)("Disable data fetching","google-listings-and-ads"),confirmation:(0,a.__)("Yes, I want to disable the data fetching feature.","google-listings-and-ads"),contents:[(0,a.__)("I understand that I am disabling the data fetching feature from this WooCommerce extension.","google-listings-and-ads"),(0,a.__)("Any ongoing campaigns and configuration will continue to run. They will be pushed to Google as in the previous versions of this extension.","google-listings-and-ads")]}};function _({disconnectTarget:e,onRequestClose:t,onDisconnected:n,disconnectAction:g}){const[m,_]=(0,i.useState)(!1),[h,f]=(0,i.useState)(!1),y=(0,d.j)(),{title:b,confirmButton:A,confirmation:E,contents:C}=p[e],v=()=>{h||t()};return(0,o.createElement)(l.A,{className:"gla-disconnect-accounts-modal",title:(0,o.createElement)(o.Fragment,null,(0,o.createElement)(c.A,{size:20}),b),isDismissible:!h,buttons:[(0,o.createElement)(r.A,{key:"1",isSecondary:!0,disabled:h,onClick:v},(0,a.__)("Never mind","google-listings-and-ads")),(0,o.createElement)(r.A,{key:"2",isPrimary:!0,isDestructive:!0,loading:h,disabled:!m,onClick:()=>{let o=e===u?y.disconnectAllAccounts:y.disconnectGoogleAdsAccount;g&&(o=g),f(!0),o().then((()=>{n(),t()})).catch((()=>{f(!1)}))}},A)],onRequestClose:v},C.map(((e,t)=>(0,o.createElement)("p",{key:t},e))),(0,o.createElement)(s.CheckboxControl,{label:E,checked:m,disabled:h,onChange:_}))}function h(e){return(0,o.createElement)(_,{...e})}},6490:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ve});var o=n(1609),a=n(6474),s=n(7723),i=n(6476),l=n(7539),r=n(7980),c=n(6473);const d=()=>(0,o.createElement)(l.A,{title:(0,s.__)("Get started with Google for WooCommerce","google-listings-and-ads"),helpButton:(0,o.createElement)(r.A,{eventContext:"setup-mc"}),backHref:(0,i.getNewPath)({},"/google/start"),onBackButtonClick:()=>{(0,c.ce)("gla_setup_mc",{triggered_by:"back-button",action:"leave"})}});var u=n(3741),g=n(8846),m=n(6087),p=n(8582),_=n(7541),h=n(6520),f=n(8859),y=n(7240),b=n(6453);var A=n(5847),E=n(7333),C=n(6523),v=n(5622),w=n(5455),k=n(5807),S=n(5640),P=n(7401),I=n(8e3),G=n(7916),x=n(7892),T=n(9370),N=n(3164),R=n(9826),q=n(6575),F=n(1177),M=n(850),B=n(4790),L=n(3476),V=n(7978),W=n(8981),D=n(9452);const Y=[{trackId:"why-do-i-need-a-wp-account",question:(0,s.__)("Why do I need a WordPress.com account?","google-listings-and-ads"),answer:(0,s.__)("We use a WordPress.com account to connect your site to the WooCommerce and Google servers. It ensures that requests (e.g. product feed, clicks, sales, etc) from your site are securely and correctly attributed to your store. It enables a connection to your self-hosted site, and provides a common authentication interface across disparate server configurations and architectures.","google-listings-and-ads")},{trackId:"why-do-i-need-a-google-mc-account",question:(0,s.__)("Why do I need a Google Merchant Center account?","google-listings-and-ads"),answer:(0,o.createElement)(o.Fragment,null,(0,o.createElement)("p",null,(0,s.__)("Google Merchant Center helps you sync your store and product data with Google and makes the information available for both free listings on the Shopping tab and Google Shopping Ads. That means everything about your stores and products is available to shoppers when they search on a Google property.","google-listings-and-ads")),(0,o.createElement)("p",null,(0,m.createInterpolateElement)((0,s.__)("If you create a new Merchant Center account through this application, it will be associated with Google’s Comparison Shopping Service (Google Shopping) by default. You can change the CSS associated with your account at any time. <link>Please find more information here</link>.","google-listings-and-ads"),{link:(0,o.createElement)(F.A,{context:"faqs",linkId:"find-a-partner",href:"https://comparisonshoppingpartners.withgoogle.com/find_a_partner/"})})))}],O=()=>(0,o.createElement)(D.A,{trackName:"gla_faq",context:"setup-mc-accounts",faqItems:Y});var j=n(1378),U=n(5992);const z=()=>(0,o.createElement)(o.Fragment,null,(0,o.createElement)("p",null,(0,m.createInterpolateElement)((0,s.__)("If you are in the European Economic Area or Switzerland, your Merchant Center account must be associated with a Comparison Shopping Service (CSS). Please find more information at <link>Google Merchant Center Help</link> website.","google-listings-and-ads"),{link:(0,o.createElement)(F.A,{context:"setup-mc-accounts",linkId:"comparison-shopping-services",href:"https://support.google.com/merchants/topic/9080307"})})),(0,o.createElement)("p",null,(0,m.createInterpolateElement)((0,s.__)("If you create a new Merchant Center account through this application, it will be associated with Google Shopping, Google’s CSS, by default. You can change the CSS associated with your account at any time. Please find more information about our CSS Partners <link>here</link>.","google-listings-and-ads"),{link:(0,o.createElement)(F.A,{context:"setup-mc-accounts",linkId:"comparison-shopping-partners-find-a-partner",href:"https://comparisonshoppingpartners.withgoogle.com/find_a_partner/"})})),(0,o.createElement)("p",null,(0,s.__)("Once you have set up your Merchant Center account you can use our onboarding tool regardless of which CSS you use.","google-listings-and-ads"))),H=e=>{const{onContinue:t=()=>{}}=e,{jetpack:n}=(0,P.A)(),{google:a,scope:i}=(0,I.A)(),{googleMCAccount:l,isPreconditionReady:r}=(0,G.A)(),{hasFinishedResolution:c,hasGoogleAdsConnection:d}=(0,j.A)(),{hasAccess:g,step:m}=(0,U.A)(),p=!n,_="yes"===n?.active&&!a,h="yes"===a?.active&&i.gmcRequired&&!l;if(p||_||h)return(0,o.createElement)(u.A,null);const f="yes"!==n?.active,y=d&&g&&["","billing","link_merchant"].includes(m),b=!(c&&y&&r&&("connected"===l?.status||"incomplete"===l?.status&&"link_ads"===l?.step));return(0,o.createElement)(T.A,null,(0,o.createElement)(N.A,{title:(0,s.__)("Set up your accounts","google-listings-and-ads"),description:(0,s.__)("Connect the accounts required to use Google for WooCommerce.","google-listings-and-ads")}),(0,o.createElement)(q.A,{className:"gla-wp-google-accounts-section",title:(0,s.__)("Connect accounts","google-listings-and-ads"),description:(0,s.__)("The following accounts are required to use the Google for WooCommerce plugin.","google-listings-and-ads")},(0,o.createElement)(M.A,{size:"large"},(0,o.createElement)(B.Ay,{jetpack:n}),(0,o.createElement)(L.h,{disabled:f}),(0,o.createElement)(W.A,null))),(0,o.createElement)(q.A,{className:"gla-google-mc-account-section",description:(0,o.createElement)(z,null),disabledLeft:!r},(0,o.createElement)(V.A,null),(0,o.createElement)(O,null)),(0,o.createElement)(R.A,null,(0,o.createElement)(x.A,{isPrimary:!0,disabled:b,onClick:t},(0,s.__)("Continue","google-listings-and-ads"))))};var $=n(9467),J=n(8468),K=n(5595),Q=n(9301),X=n(6319),Z=n(5489),ee=n(6020);const te=()=>{const{adapter:{renderRequestedValidation:e}}=(0,Q.h)();return(0,o.createElement)("div",{className:"gla-pre-launch-checklist"},(0,o.createElement)(q.A,{title:(0,s.__)("Pre-Launch Checklist","google-listings-and-ads"),description:(0,o.createElement)("div",null,(0,o.createElement)("p",null,(0,s.__)("Ensure you meet Google Merchant Center requirements by reviewing this checklist. Otherwise, your products may be disapproved or your Google Merchant Center account may be suspended by Google.","google-listings-and-ads")),(0,o.createElement)("p",null,(0,o.createElement)(F.A,{context:"setup-mc-checklist",linkId:"checklist-requirements",href:"https://woocommerce.com/document/google-for-woocommerce/compliance-policy-2"},(0,s.__)("Read Google Merchant Center requirements","google-listings-and-ads"))))},(0,o.createElement)(q.A.Card,null,(0,o.createElement)(q.A.Card.Body,null,(0,o.createElement)(M.A,{size:"large"},(0,o.createElement)(ee.A,{fieldName:"website_live",firstPersonTitle:(0,s.__)("My store is live and accessible to all users","google-listings-and-ads"),secondPersonTitle:(0,s.__)("Confirm your store is live and accessible to all users","google-listings-and-ads")},(0,s.__)("Your Merchant Center account can be suspended if your store is not functional. Ensure that your domain and product pages are not leading to an under construction webpage, or an error page that displays a status code beginning with a 4 or 5 (such as a 405 error).","google-listings-and-ads"),(0,o.createElement)(F.A,{context:"setup-mc-checklist",linkId:"check-website-is-live",type:"external",href:"https://woocommerce.com/document/google-for-woocommerce/compliance-policy-2/#store-is-live"},(0,s.__)("Learn more about common landing page issues and how to fix them","google-listings-and-ads"))),(0,o.createElement)(ee.A,{fieldName:"payment_methods_visible",firstPersonTitle:(0,s.__)("I have a complete checkout process","google-listings-and-ads"),secondPersonTitle:(0,s.__)("Confirm you have a complete checkout process","google-listings-and-ads")},(0,s.__)("Ensure that all customers are able to complete the full checkout process on your site with an eligible payment method. Include a confirmation of the purchase after completion of the checkout process.","google-listings-and-ads"),(0,o.createElement)(F.A,{context:"setup-mc-checklist",linkId:"check-payment-methods-visible",type:"external",href:"https://woocommerce.com/document/google-for-woocommerce/compliance-policy-2/#complete-checkout"},(0,s.__)("Learn more about Google's checkout requirements & best practices","google-listings-and-ads"))),(0,o.createElement)(ee.A,{fieldName:"checkout_process_secure",firstPersonTitle:(0,s.__)("I have a secure checkout process","google-listings-and-ads"),secondPersonTitle:(0,s.__)("Confirm you have a secure checkout process","google-listings-and-ads")},(0,s.__)("Update your website to ensure that every webpage that collects a customer's personal information is processed through a secure SSL server. Any page on your website that collects any personal information from the user needs to be SSL protected.","google-listings-and-ads"),(0,o.createElement)("div",null),(0,s.__)("Use a secure server: Make sure to use a secure processing server when processing customer's personal information (SSL-protected, with a valid SSL certificate). With SSL, your webpage URL will appear with https:// instead of http://","google-listings-and-ads"),(0,o.createElement)(F.A,{context:"setup-mc-checklist",linkId:"check-checkout-process-secure",type:"external",href:"https://woocommerce.com/document/google-for-woocommerce/compliance-policy-2/#complete-checkout"},(0,s.__)("Learn to set up SSL on your website","google-listings-and-ads"))),(0,o.createElement)(ee.A,{fieldName:"refund_tos_visible",firstPersonTitle:(0,s.__)("My refund policy and terms of service are visible on my online store","google-listings-and-ads"),secondPersonTitle:(0,s.__)("Confirm a refund policy and terms of service are visible on your online store","google-listings-and-ads")},(0,s.__)("Show a clear return and refund policy on your website. Include return process, refund process, and customer requirements (return window, product condition and reason for return). If you don't accept returns or refunds, clearly state that on your website.","google-listings-and-ads"),(0,o.createElement)(F.A,{context:"setup-mc-checklist",linkId:"check-refund-tos-visible",type:"external",href:"https://woocommerce.com/document/google-for-woocommerce/compliance-policy-2/#refund-and-terms"},(0,s.__)("Learn more about Google's refund policy requirements","google-listings-and-ads"))),(0,o.createElement)(ee.A,{fieldName:"contact_info_visible",firstPersonTitle:(0,s.__)("My store's phone number, email and/or address are visible on my website","google-listings-and-ads"),secondPersonTitle:(0,s.__)("Confirm your store's phone number, email and/or address are visible on your website","google-listings-and-ads")},(0,s.__)("Allow your customers to contact you for product inquiries by including contact information on your website (i.e. contact us form, business profile link, social media, email or phone number).","google-listings-and-ads"))),e("preLaunchChecklist")))))};var ne=n(9263);function oe(e){const t={};return["website_live","checkout_process_secure","payment_methods_visible","refund_tos_visible","contact_info_visible"].some((t=>!0!==e[t]))&&(t.preLaunchChecklist=(0,s.__)("Please check all requirements.","google-listings-and-ads")),t}function ae({onContinue:e}){const{updateGoogleMCContactInformation:t,saveSettings:n}=(0,p.j)(),{createNotice:a}=(0,S.A)(),{data:i}=(0,K.A)(),{settings:l}=(0,E.A)(),{data:r}=(0,ne.A)(),[c,d]=(0,m.useState)(!1),[g,_]=(0,m.useState)(!0),[h,f]=(0,m.useState)(!1);return(0,m.useEffect)((()=>{if(h||!l||!r)return;const e={...l},t=r.allowed_countries&&!r.robots_restriction&&!r.page_not_found_error&&!r.page_redirects;t!==l.website_live&&(e.website_live=t),r.store_ssl!==l.checkout_process_secure&&(e.checkout_process_secure=r.store_ssl),r.refund_returns!==l.refund_tos_visible&&(e.refund_tos_visible=r.refund_returns),r.payment_gateways!==e.payment_methods_visible&&(e.payment_methods_visible=r.payment_gateways),((0,J.isEqual)(e,l)?Promise.resolve():n(e)).finally((()=>f(!0)))}),[h,r,l,n]),h?(0,o.createElement)(T.A,null,(0,o.createElement)(N.A,{title:(0,s.__)("Confirm store requirements","google-listings-and-ads"),description:(0,s.__)("Review and confirm that your store meets Google Merchant Center requirements.","google-listings-and-ads")}),(0,o.createElement)(Q.A,{initialValues:{website_live:l.website_live,checkout_process_secure:l.checkout_process_secure,payment_methods_visible:l.payment_methods_visible,refund_tos_visible:l.refund_tos_visible,contact_info_visible:l.contact_info_visible},extendAdapter:e=>({renderRequestedValidation:t=>e.adapter.requestedShowValidation?(0,o.createElement)(X.A,{messages:e.errors[t]}):null}),validate:oe,onChange:async(e,t)=>{try{await n(t),_(!0)}catch(e){g&&a("error",(0,s.__)("There was an error trying to save settings. Please try again later.","google-listings-and-ads")),_(!1)}},onSubmit:async()=>{try{await t(),e()}catch(e){a("error",(0,s.__)("Unable to update your contact information. Please try again later.","google-listings-and-ads"))}}},(e=>{const{handleSubmit:t,isValidForm:n,adapter:a}=e;return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(Z.A,{onPhoneNumberVerified:()=>d(!0)}),(0,o.createElement)(te,null),(0,o.createElement)(R.A,null,(0,o.createElement)(x.A,{isPrimary:!0,loading:a.isSubmitting,disabled:!g,onClick:e=>{if(n&&c&&i.isAddressFilled)return t(e);a.showValidation()}},(0,s.__)("Continue","google-listings-and-ads"))))}))):(0,o.createElement)(u.A,null)}var se=n(1455),ie=n.n(se),le=n(7143),re=n(6427),ce=n(1968),de=n(8519),ue=n(4960),ge=n(5955),me=n(5170),pe=n(9095);function _e({hideBudgetContent:e}){const t=[{Icon:ge.A,content:(0,s.__)("Set a daily budget, and only pay when people click on your ads.","google-listings-and-ads")}];return e||t.push({Icon:me.A,content:(0,s.__)("Claim $500 in ads credit when you spend your first $500 with Google Ads. Terms and conditions apply.","google-listings-and-ads")}),(0,o.createElement)("div",{className:"gla-paid-ads-features-section__feature-list"},t.map((({Icon:e,content:t},n)=>(0,o.createElement)(re.Flex,{key:n,align:"flex-start"},(0,o.createElement)(e,{size:"18"}),(0,o.createElement)(re.FlexBlock,null,t)))))}function he({hideBudgetContent:e,hideFooterButtons:t,skipButton:n,continueButton:a}){return(0,o.createElement)(q.A,{className:"gla-paid-ads-features-section",topContent:(0,o.createElement)(g.Pill,null,(0,s.__)("Recommended","google-listings-and-ads")),title:(0,s.__)("Performance Max campaign","google-listings-and-ads"),description:(0,o.createElement)(o.Fragment,null,(0,o.createElement)("p",null,(0,s.__)("Performance Max uses the best of Google’s AI to show the most impactful ads for your products at the right time and place. Google will use your product data to create ads for this campaign. ","google-listings-and-ads")),(0,o.createElement)("p",null,(0,o.createElement)(F.A,{context:"setup-paid-ads",linkId:"paid-ads-with-performance-max-campaigns-learn-more",href:"https://support.google.com/google-ads/answer/10724817"},(0,s.__)("Learn more about Performance Max","google-listings-and-ads"))))},(0,o.createElement)(q.A.Card,null,(0,o.createElement)(q.A.Card.Body,null,(0,o.createElement)(re.Flex,{className:"gla-paid-ads-features-section__content",align:"center",gap:9},(0,o.createElement)(re.FlexBlock,null,(0,o.createElement)(q.A.Card.Title,null,(0,s.__)("Drive more sales with Performance Max","google-listings-and-ads")),(0,o.createElement)("div",{className:"gla-paid-ads-features-section__subtitle"},(0,s.__)("Reach more customers by advertising your products across Google Ads channels like Search, YouTube and Discover. Set up your campaign now so your products are included as soon as they’re approved.","google-listings-and-ads")),(0,o.createElement)(_e,{hideBudgetContent:e})),(0,o.createElement)(re.FlexItem,null,(0,o.createElement)(pe.A,null)))),(0,o.createElement)(q.A.Card.Footer,{hidden:t},n,a)))}var fe=n(6893),ye=n(5180),be=n(9262),Ae=n(5702),Ee=n(6028),Ce=n(1547);const ve="gla-onboarding-show-paid-ads-setup",we="gla-onboarding-paid-ads",{sessionStorage:ke}=window,Se={setShowPaidAdsSetup(e){const t=Boolean(e).toString();ke.setItem(ve,t)},getShowPaidAdsSetup(e){const t=ke.getItem(ve);return null===t?e:"true"===t},setCampaign({amount:e,countryCodes:t}){const n=JSON.stringify({amount:e,countryCodes:t});ke.setItem(we,n)},getCampaign(){const e=ke.getItem(we);return null===e?null:JSON.parse(e)}};var Pe=n(3905);const Ie={amount:0,countryCodes:[],isValid:!1,isReady:!1};function Ge(e,t){const n={...e};return t&&(n.countryCodes===Ie.countryCodes?n.countryCodes=t:n.countryCodes=n.countryCodes.filter((e=>t.includes(e)))),n.isValid=!Object.keys((0,Ce.A)(n)).length,n}function xe({onStatesReceived:e}){const{hasGoogleAdsConnection:t}=(0,j.A)(),{data:n}=(0,A.A)(),{billingStatus:a}=(0,fe.A)(),i=(0,m.useRef)();i.current=e;const[l,r]=(0,m.useState)((()=>Ge({...Ie,...Se.getCampaign()},n))),c=a?.status===Pe.CX.APPROVED;if((0,m.useEffect)((()=>{const e={...l,isReady:l.isValid&&c};i.current(e),Se.setCampaign(e)}),[l,c]),(0,m.useEffect)((()=>{r((e=>Ge(e,n)))}),[n]),!n||!a)return(0,o.createElement)(q.A,null,(0,o.createElement)(Ee.A,null));const d={countryCodes:l.countryCodes,amount:l.amount};return(0,o.createElement)(g.Form,{initialValues:d,onChange:(e,t,n)=>{r({...l,...t,isValid:n})},validate:Ce.A},(e=>{const{countryCodes:n}=e.values,a=!t,i=a||0===n.length;return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(ye.A,{formProps:e,disabled:a,countrySelectHelperText:(0,s.__)("You can only choose from countries you’ve selected during product listings configuration.","google-listings-and-ads")}),(0,o.createElement)(be.A,{formProps:e,disabled:i},!i&&(0,o.createElement)(Ae.Ay,null)))}))}var Te=n(3666);const Ne="complete-ads",Re="skip-ads";function qe(){const e=(0,ce.A)(),{createNotice:t}=(0,S.A)(),{googleAdsAccount:n,hasGoogleAdsConnection:a}=(0,j.A)(),[i]=(0,de.A)(),[l,r]=(0,m.useState)((()=>Se.getShowPaidAdsSetup(!1))),[c,d]=(0,m.useState)({}),[u,g]=(0,m.useState)(null),p=async(n,o=J.noop)=>{g(n.target.dataset.action);try{await o(),await ie()({path:`${h.RV}/mc/settings/sync`,method:"POST"})}catch(e){g(null),t("error",(0,s.__)("Unable to complete your setup.","google-listings-and-ads"))}const a={guide:Pe.K4.SUBMISSION_SUCCESS};window.location.href=e+(0,Te.hP)(a)},_=u===Re||!c.isReady;function f(e){const t={opened_paid_ads_setup:"no",google_ads_account_status:n?.status,billing_method_status:"unknown",campaign_form_validation:"unknown"};if(l){const e=(0,le.select)(h.Ui).getGoogleAdsAccountBillingStatus();(0,J.merge)(t,{opened_paid_ads_setup:"yes",billing_method_status:e?.status,campaign_form_validation:c.isValid?"valid":"invalid"})}const s=u===Ne||!a;return(0,o.createElement)(x.A,{isTertiary:!0,"data-action":Re,text:e,loading:u===Re,disabled:s,onClick:p,eventName:"gla_onboarding_complete_button_click",eventProps:t})}return(0,o.createElement)(T.A,null,(0,o.createElement)(N.A,{title:(0,s.__)("Create a campaign to advertise your products","google-listings-and-ads"),description:(0,s.__)("You’re ready to set up a Performance Max campaign to drive more sales with ads. Your products will be included in the campaign after they’re approved.","google-listings-and-ads")}),(0,o.createElement)(he,{hideBudgetContent:!a,hideFooterButtons:!a||l,skipButton:f((0,s.__)("Skip this step for now","google-listings-and-ads")),continueButton:(0,o.createElement)(x.A,{isPrimary:!0,text:(0,s.__)("Create campaign","google-listings-and-ads"),disabled:u===Re,onClick:()=>{r(!0),Se.setShowPaidAdsSetup(!0)},eventName:"gla_onboarding_open_paid_ads_setup_button_click"})}),l&&(0,o.createElement)(xe,{onStatesReceived:d}),(0,o.createElement)(ue.A,null),(0,o.createElement)(R.A,{hidden:!l},(0,o.createElement)(re.Flex,{justify:"right",gap:4},f((0,s.__)("Skip paid ads creation","google-listings-and-ads")),(0,o.createElement)(x.A,{isPrimary:!0,"data-action":Ne,text:(0,s.__)("Complete setup","google-listings-and-ads"),loading:u===Ne,disabled:_,onClick:async e=>{const t=i.bind(null,c.amount,c.countryCodes);await p(e,t)},eventName:"gla_onboarding_complete_with_paid_ads_button_click",eventProps:{budget:c.amount,audiences:c.countryCodes?.join(",")}}))))}const Fe={accounts:"1",product_listings:"2",store_requirements:"3",paid_ads:"4"},Me=({savedStep:e})=>{const[t,n]=(0,m.useState)(e),{settings:a}=(0,E.A)(),{data:i}=(()=>{const{hasFinishedResolution:e}=(0,y.A)(),{hasFinishedResolution:t,data:n}=(0,f.A)(),{loading:o,data:a}=(0,b.A)({path:`${h.RV}/mc/target_audience/suggestions`});return{loading:!e||!t||o,data:t&&null===n?.location&&null===n?.countries?a:n}})(),{targetAudience:l,getFinalCountries:r}=(0,A.A)(),{hasFinishedResolution:d,data:u}=(0,C.A)(),{hasFinishedResolution:P,data:I}=(0,v.A)(),{saveTargetAudience:G,saveSettings:x}=(0,p.j)(),{saveShippingRates:T}=(0,w.A)(),{saveShippingTimes:N}=(0,k.A)(),{createNotice:R}=(0,S.A)();(0,_.A)(c.T1,{context:c.GH,step:t}),(0,m.useEffect)((()=>{null===l?.location&&i?.location&&G(i)}),[l,i,G]),(0,m.useEffect)((()=>{null===a?.shipping_rate&&x({...a,shipping_rate:"automatic",shipping_time:"flat"})}),[a,x]);const q=e=>{const o=t;(0,c.dQ)("gla_setup_mc",o,e),n(e)},F=e=>{Number(e)<Number(t)&&((0,c.T)("gla_setup_mc",e),n(e))};function M(e,t){this(t).catch((()=>R("error",e)))}const B=d?u:null,L=P?I:null,V=l?.location?l:null,W=a?.shipping_rate?a:null;return(0,o.createElement)(g.Stepper,{className:"gla-setup-stepper",currentStep:t,steps:[{key:Fe.accounts,label:(0,s.__)("Set up your accounts","google-listings-and-ads"),content:(0,o.createElement)(H,{onContinue:()=>{q(Fe.product_listings)}}),onClick:F},{key:Fe.product_listings,label:(0,s.__)("Configure product listings","google-listings-and-ads"),content:(0,o.createElement)($.A,{headerTitle:(0,s.__)("Configure your product listings","google-listings-and-ads"),targetAudience:V,settings:W,shippingRates:B,shippingTimes:L,resolveFinalCountries:r,onTargetAudienceChange:M.bind(G,(0,s.__)("There was an error saving audience.","google-listings-and-ads")),onSettingsChange:M.bind(x,(0,s.__)("There was an error saving settings.","google-listings-and-ads")),onShippingRatesChange:M.bind(T,(0,s.__)("There was an error saving shipping rates.","google-listings-and-ads")),onShippingTimesChange:M.bind(N,(0,s.__)("There was an error saving shipping times.","google-listings-and-ads")),onContinue:()=>{q(Fe.store_requirements)},submitLabel:(0,s.__)("Continue","google-listings-and-ads")}),onClick:F},{key:Fe.store_requirements,label:(0,s.__)("Confirm store requirements","google-listings-and-ads"),content:(0,o.createElement)(ae,{onContinue:()=>{q(Fe.paid_ads)}}),onClick:F},{key:Fe.paid_ads,label:(0,s.__)("Create a campaign","google-listings-and-ads"),content:(0,o.createElement)(qe,null),onClick:F}]})};var Be=n(3027);const Le=()=>{const{hasFinishedResolution:e,data:t}=(0,Be.A)();if(!e&&!t)return(0,o.createElement)(u.A,null);if(e&&!t)return null;const{status:n,step:a}=t;return"complete"===n?((0,i.getHistory)().replace((0,i.getNewPath)({},"/google/dashboard")),null):(0,o.createElement)(Me,{savedStep:Fe[a]})},Ve=()=>((0,a.A)("full-page"),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(d,null),(0,o.createElement)(Le,null)))}}]);