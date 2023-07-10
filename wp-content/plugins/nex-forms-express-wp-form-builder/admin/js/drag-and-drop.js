"use strict";function reset_zindex(a){setTimeout(function(){a.css("width",""),a.css("right",""),a.css("height",""),a.css("bottom",""),a.css("left",""),a.css("z-index","")},20)}function create_droppable(a){var n=a,t=jQuery("div.field-selection-tools .form_field"),d=new Array;t.draggable({start:function(a,t){},drag:function(a,t){jQuery(".inner-canvas-container.active").addClass("dragging"),n.addClass("placing-field"),t.helper.addClass("moving"),nf_form_modified("drag")},stop:function(a,t){jQuery(".inner-canvas-container.active").removeClass("dragging"),jQuery(".field_settings").removeClass("parent-over-field"),jQuery(".field_settings").removeClass("over-field"),n.removeClass("placing-field"),t.helper.removeClass("moving")},stack:".draggable",revert:"invalid",tolerance:"pointer",connectToSortable:a,snap:!0,helper:"clone",delay:350,scroll:!0,scrollSpeed:20,scrollSensitivity:100}),n.droppable({drop:function(a,t){t.draggable.hasClass("dropped")||setup_form_element(t.draggable),reset_zindex(t.draggable),jQuery(this).removeClass("over"),nf_form_modified("drop")},over:function(){jQuery(this).addClass("over")},out:function(){jQuery(this).removeClass("over")},tolerance:"fit",helper:"clone",accept:".form_field"}).sortable({start:function(a,t){if(t.helper.hasClass("batch_edit")){jQuery(jQuery(".form-canvas-area").attr("data-sec-pre-class")+" .inner-canvas-container.active .batch_edit").each(function(a){jQuery(this).attr("data-bath-pos",a)}),t.helper.removeClass("batch_edit"),t.helper.addClass("moving_batch");try{jQuery(jQuery(".form-canvas-area").attr("data-sec-pre-class")+" .inner-canvas-container.active .batch_edit").each(function(a){d[a]=jQuery(this).detach()})}catch(a){console.log("Something went wrong - Attemting Undo"),jQuery(".history_action.do_undo").trigger("click")}}jQuery(".inner-canvas-container.active").addClass("dragging"),jQuery(".field_settings").removeClass("parent-over-field"),jQuery(".over-field").removeClass("over-field"),jQuery(".set-over-field").removeClass("set-over-field"),t.helper.removeClass("field"),t.helper.addClass("moving")},cursorAt:{left:0,top:0},stop:function(a,t){if(jQuery(".form-canvas-area").hasClass("split_view")&&setTimeout(function(){nf_save_nex_form("","preview","")},300),jQuery(".inner-canvas-container.active").removeClass("dragging"),jQuery(".field_settings").removeClass("parent-over-field"),jQuery(".field_settings").removeClass("over-field"),jQuery(".set-over-field").removeClass("set-over-field"),t.item.hasClass("step")&&nf_count_multi_steps(),n.removeClass("placing-field"),jQuery(".moving").removeClass("moving"),nf_form_modified("sort"),t.item.hasClass("moving_batch")&&0<d.length){for(var e=t.item,s=parseInt(e.attr("data-bath-pos")),i=0;i<d.length;i++){var r=d[i];i<s&&r.insertBefore(e)}for(i=d.length-1;0<=i;i--){r=d[i];s<=i&&r.insertAfter(e)}e.addClass("batch_edit"),e.removeClass("moving_batch"),d="",create_droppable(jQuery(jQuery(".form-canvas-area").attr("data-sec-pre-class")+" .inner-canvas-container.active"))}},placeholder:"place-holder",forcePlaceholderSize:!0,connectWith:".panel-body",delay:150,scroll:!0,scrollSpeed:15,scrollSensitivity:80})}function setup_form_element(e){var s,i,r,a,t,n,d,l,o,c,p,f,u,m,h;jQuery("div.inner-canvas-container").find("div.draggable_object").remove(),e.find("div.form_object").show(),jQuery("div.inner-canvas-container").find("div.form_field").removeClass("field"),e.hasClass("step")||e.hasClass("field_spacer")||e.find(".edit_mask").attr("class")||e.prepend('<div class="edit_mask"></div>'),e.removeClass("field"),0<e.find(".input-group-addon.prefix").length?e.addClass("has_prefix_icon"):e.removeClass("has_prefix_icon"),0<e.find(".input-group-addon.postfix").length?e.addClass("has_postfix_icon"):e.removeClass("has_postfix_icon"),e.hasClass("html_image")&&(s=e.find(".the-image-container"),i=e.find(".show-width"),r=e.find(".show-height"),e.find(".the-image-container").append('<div class="change_image2"><button class="btn md-btn btn-light-blue ">Change</button></div>'),"0px"==e.find("img").css("width")&&e.find("img").css("width",e.find("img").attr("width")+"px"),"0px"==e.find("img").css("height")&&e.find("img").css("height",e.find("img").attr("height")+"px"),e.find(".the-image-container img").resizable({resize:function(a,t){s.addClass("resizing"),s.css("width",t.size.width+"px"),s.css("height",t.size.height+"px"),i.text(t.size.width+"px"),r.text(t.size.height+"px"),e.hasClass("currently_editing")&&(jQuery("#set_image_width").val(t.size.width),jQuery("#set_image_height").val(t.size.height))},stop:function(a,t){s.removeClass("resizing")}})),e.hasClass("field_spacer")&&e.find(".field_spacer").resizable({handles:"s",minHeight:5,resize:function(a,t){e.find(".total_px").text(t.size.height)}}),e.hasClass("jq-datepicker")&&e.find("#datetimepicker input").datepicker(),(e.hasClass("jq-radio-group")||e.hasClass("jq-check-group"))&&e.find("#the-radios input").checkboxradio(),e.hasClass("digital-signature")&&e.find(".js-signature").jqSignature(),e.hasClass("md-select")&&e.find("select").material_select(),(e.hasClass("text")||e.hasClass("textarea"))&&e.find(".the_input_element").attr("data-value")&&e.find(".the_input_element").val(e.find(".the_input_element").attr("data-value")),(e.hasClass("paragraph")||e.hasClass("heading"))&&(e.find("input.set_math_result").attr("name")||e.find(".the_input_element").parent().append('<input type="hidden" class="set_math_result" value="0" name="math_result">')),e.hasClass("grid")&&(create_droppable(e.find(".panel-body")),create_droppable(jQuery(jQuery(".form-canvas-area").attr("data-sec-pre-class")+" .inner-canvas-container"))),e.hasClass("datetime")&&e.find("#datetimepicker").datetimepicker({format:e.find("#datetimepicker").attr("data-format")?e.find("#datetimepicker").attr("data-format"):"MM/DD/YYYY hh:mm A",locale:e.find("#datetimepicker").attr("data-language")?e.find("#datetimepicker").attr("data-language"):"en"}),e.hasClass("md-datepicker")&&(e.addClass("date"),e.removeClass("md-datepicker")),e.hasClass("md-time-picker")&&(e.addClass("time"),e.removeClass("md-time-picker")),(e.hasClass("date")||e.hasClass("md-datepicker"))&&((a=e.find("#datetimepicker").attr("data-enabled-days"))&&(n=a.split(",")),(a=e.find("#datetimepicker").attr("data-disabled-dates"))&&(t=a.split(",")),e.find("#datetimepicker").datetimepicker({useCurrent:!1,disabledDates:t||[],keepOpen:"true"==e.find("#datetimepicker").attr("data-keep-open"),widgetPositioning:{vertical:e.find("#datetimepicker").attr("data-position")?e.find("#datetimepicker").attr("data-position"):"bottom",horizontal:"auto"},inline:"true"==e.find("#datetimepicker").attr("data-inline"),minDate:"1"==e.find("#datetimepicker").attr("data-disable-past-dates")&&new Date,format:e.find("#datetimepicker").attr("data-format")?e.find("#datetimepicker").attr("data-format"):"MM/DD/YYYY",locale:e.find("#datetimepicker").attr("data-language")?e.find("#datetimepicker").attr("data-language"):"en",defaultDate:"now"==e.find("input").attr("data-value")?"now":"",viewMode:e.find("#datetimepicker").attr("data-viewMode")?e.find("#datetimepicker").attr("data-viewMode"):"days",daysOfWeekDisabled:n||[]})),(e.hasClass("time")||e.hasClass("md-time-picker"))&&((t=e.find("#datetimepicker").attr("data-enabled-hours"))&&(d=t.split(",")),e.find("input").attr("data-value")&&(t=(n=("00-00-00 "+e.find("input").attr("data-value")).split(" "))[1].split(":"),n=n[0].split("-"),new Date(n[2],parseInt(n[1],10)-1,n[0],t[0],t[1])),e.find("input").attr("data-value"),e.find("#datetimepicker").datetimepicker({useCurrent:!1,viewDate:!1,widgetPositioning:{vertical:e.find("#datetimepicker").attr("data-position")?e.find("#datetimepicker").attr("data-position"):"bottom",horizontal:"auto"},inline:"true"==e.find("#datetimepicker").attr("data-inline"),format:"HH:mm",locale:e.find("#datetimepicker").attr("data-language")?e.find("#datetimepicker").attr("data-language"):"en",stepping:e.find("#datetimepicker").attr("data-stepping")?e.find("#datetimepicker").attr("data-stepping"):5,enabledHours:d||[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0]})),e.hasClass("jq-datepicker")&&("1"==e.find("#datetimepicker").attr("data-disable-past-dates")?e.find("#datetimepicker input").datepicker({minDate:"1"==e.find("#datetimepicker").attr("data-disable-past-dates")&&new Date}):e.find("#datetimepicker input").datepicker({})),e.hasClass("touch_spinner")&&(d=e.find("#spinner")).TouchSpin({verticalbuttons:"true"==d.attr("data-verticalbuttons"),initval:parseInt(d.attr("data-starting-value")),min:parseInt(d.attr("data-minimum")),max:parseInt(d.attr("data-maximum")),step:parseInt(d.attr("data-step")),decimals:parseInt(d.attr("data-decimals")),boostat:5,maxboostedstep:10,postfix:d.attr("data-postfix-icon")?'<span class="'+d.attr("data-postfix-icon")+" "+d.attr("data-postfix-class")+'">'+d.attr("data-postfix-text")+"</span>":"",prefix:d.attr("data-prefix-icon")?'<span class="'+d.attr("data-prefix-icon")+" "+d.attr("data-prefix-class")+'">'+d.attr("data-prefix-text")+"</span>":"",buttondown_class:"btn "+d.attr("data-down-class"),buttonup_class:"btn "+d.attr("data-up-class")}),e.hasClass("color_pallet")&&e.find("#colorpalette").colorPalette().on("selectColor",function(a){e.find("#selected-color").val(a.color),e.find("#selected-color").trigger("change"),e.find(".input-group-addon").css("background",a.color)}),e.hasClass("slider")&&(l=e.find("#slider").attr("data-starting-value"),c=(o=e.find("#slider")).attr("data-min-value"),p=o.attr("data-max-value"),f=o.attr("data-starting-value"),u=o.attr("data-step-value"),e.find("#slider").slider({range:"min",min:parseInt(c),max:parseInt(p),value:parseInt(f),step:parseInt(u),slide:function(a,t){l='<span class="ui-slider-tip count-text">'+o.attr("data-count-text").replace("{x}",parseInt(t.value).format(0))+"</span>",o.find(".ui-slider-handle").html('<span id="icon" class="'+o.attr("data-dragicon")+'"></span> '+l).addClass(o.attr("data-dragicon-class")).removeClass("ui-state-default"),e.find("input").val(t.value),e.find("input").trigger("change")},create:function(a,t){l='<span class="ui-slider-tip count-text">'+o.attr("data-count-text").replace("{x}",f||c)+"</span>",o.find(".ui-slider-handle").html('<span id="icon" class="'+o.attr("data-dragicon")+'"></span> '+l).addClass(o.attr("data-dragicon-class")).removeClass("ui-state-default")}}),o.find(".ui-slider-handle").css("color",o.attr("data-text-color")),o.find(".ui-slider-handle").css("border-color",o.attr("data-handel-border-color")),o.find(".ui-slider-handle").css("background-color",o.attr("data-handel-background-color")),o.find(".ui-widget-content").css("border-color",o.attr("data-slider-border-color")),o.find(".ui-slider-range:first-child").css("background","#f2f2f2"==o.attr("data-fill-color")?"#ddd":o.attr("data-fill-color")),o.find(".ui-slider-range:last-child").css("background",o.attr("data-background-color"))),e.hasClass("md-slider")&&(l=e.find("#slider").attr("data-starting-value"),c=(o=e.find("#slider")).attr("data-min-value"),p=o.attr("data-max-value"),f=o.attr("data-starting-value"),u=o.attr("data-step-value"),e.find("#slider").slider({range:"min",min:parseInt(c),max:parseInt(p),value:parseInt(f),step:parseInt(u),slide:function(a,t){e.find(".count-text").html(o.attr("data-count-text").replace("{x}",parseInt(t.value).format(0))),e.find("input").val(t.value),e.find("input").trigger("change")},create:function(a,t){l='<span class="noUi-tooltip"><span class="count-text">'+o.attr("data-count-text").replace("{x}",(f?parseInt(f):parseInt(c)).format(0))+"</span></span>",o.find(".ui-slider-handle").html(l).addClass(o.attr("data-dragicon-class")).removeClass("ui-state-default"),o.find(".ui-slider-handle").addClass("noUi-handle noUi-handle-lower ").removeClass("btn").removeClass("btn-default")}})),e.hasClass("star-rating")&&(e.find("#star").raty({number:parseInt(e.find("#star").attr("data-total-stars")),scoreName:format_illegal_chars(e.find(".the_label").text()),half:"false"!=e.find("#star").attr("data-enable-half"),starHalf:e.find("#star").attr("data-starHalf")?e.find("#star").attr("data-starHalf"):"fa fa-star-half",starOff:e.find("#star").attr("data-starOff")?e.find("#star").attr("data-starOff"):"fa fa-star-o",starOn:e.find("#star").attr("data-starOn")?e.find("#star").attr("data-starOn"):"fa fa-star",styleHalf:e.find("#star").attr("data-stylehalf")?e.find("#star").attr("data-stylehalf"):"#ec971f",styleOff:e.find("#star").attr("data-styleoff")?e.find("#star").attr("data-styleoff"):"#bbb",styleOn:e.find("#star").attr("data-styleon")?e.find("#star").attr("data-styleon"):"#ec971f",size:e.find("#star").attr("data-size")?e.find("#star").attr("data-size"):"25"}),e.find("#star input").addClass("the_input_element").addClass("hidden"),e.find("#star input").prop("type","text")),e.hasClass("select"),e.hasClass("tags")&&(e.find(".input-group").attr("class")?((m=e.find("input#tags")).detach(),e.find(".input-group-addon").hasClass("postfix")?m.insertBefore(e.find(".input-group-addon.postfix")):m.insertAfter(e.find(".input-group-addon.prefix"))):m=e.find("input#tags"),m.tagsinput({maxTags:m.attr("data-max-tags")?m.attr("data-max-tags"):""}),e.find(".bootstrap-tagsinput input").css("color",m.attr("data-text-color")),e.find(".bootstrap-tagsinput").css("border-color",m.attr("data-border-color")),e.find(".bootstrap-tagsinput").css("background-color",m.attr("data-background-color")),e.find(".bootstrap-tagsinput").addClass("error_message").addClass("the_input_element"),e.find(".bootstrap-tagsinput").attr("data-placement",m.attr("data-placement")),e.find(".bootstrap-tagsinput").attr("data-error-class",m.attr("data-error-class")),e.find(".bootstrap-tagsinput").attr("data-content",m.attr("data-content")),e.find(".bootstrap-tagsinput").addClass("form-control"),e.find("input").removeClass("the_input_element")),e.hasClass("autocomplete")&&(h=(h=e.find("div.get_auto_complete_items").text()).split("\n"),e.find("#autocomplete").autocomplete({source:h})),e.hasClass("image-choices-field"),e.hasClass("single-image-select-group")&&e.find('input[type="radio"]').attr("class")&&(e.find('input[type="radio"]').nexchecks(),e.find('input[type="radio"]').closest("label").find(".input-label").addClass("img-thumbnail")),e.hasClass("multi-image-select-group")&&e.find('input[type="checkbox"]').attr("class")&&(e.find('input[type="checkbox"]').nexchecks(),e.find('input[type="checkbox"]').closest("label").find(".input-label").addClass("img-thumbnail")),e.hasClass("radio-group")&&!e.hasClass("classic-radio-group")&&e.find('input[type="radio"]').attr("class")&&e.find('input[type="radio"]').nexchecks(),e.hasClass("check-group")&&!e.hasClass("classic-check-group")&&e.find('input[type="checkbox"]').attr("class")&&e.find('input[type="checkbox"]').nexchecks(),e.hasClass("upload_fields")&&e.find(".btn-file").removeClass("btn"),e.hasClass("grid-system")&&e.removeClass("ui-widget-content"),e.hasClass("dropped")||(h="_"+Math.round(99999*Math.random()),e.attr("id",h),e.addClass("dropped")),e.hasClass("grid-system")&&nf_setup_grid(e),e.find(".field_settings").removeAttr("style"),e.find(".field_settings .btn").removeClass("waves-effect"),e.find(".field_settings .btn").removeClass("waves-light"),e.find(".field_settings .waves-ripple").remove()}jQuery(document).ready(function(){jQuery(".change_image").remove(),jQuery(".nex-forms-msg-container .form_field").each(function(){var a;jQuery(this).attr("id")||(a="_"+Math.round(99999*Math.random()),jQuery(this).attr("id",a),jQuery(this).addClass("dropped"))}),create_droppable(jQuery(".inner-canvas-container")),jQuery(document).on("click",".draggable_object",function(){nf_save_state("undo"),nf_form_modified("drop");var a="new_item";jQuery(this).parent().hasClass("step")&&(a="fadeInDown"),jQuery(this).parent().hasClass("grid-system")&&(a="fadeInDown");var t,e=jQuery(this).closest(".form_field ").clone();jQuery(".form-canvas-area").hasClass("msg-editor-view")?(setup_form_element(e),jQuery(jQuery(".form-canvas-area").attr("data-sec-pre-class")+" .nex-forms-msg-container.active").append(e)):jQuery(".nex-forms-container .active_step").attr("class")&&!e.hasClass("step")?jQuery("div.nex-forms-container .active_step").find(".nex_prev_steps").attr("class")?jQuery("div.nex-forms-container .active_step").find(".nex_prev_steps").before(e):jQuery("div.nex-forms-container .active_step .panel-body").first().append(e):jQuery(jQuery(".form-canvas-area").attr("data-sec-pre-class")+" .inner-canvas-container.active").append(e),e.addClass("animated").addClass(a),setTimeout(function(){e.removeClass("animated").removeClass(a)},1e3),setup_form_element(e),jQuery(".form-canvas-area").hasClass("split_view")&&setTimeout(function(){nf_save_nex_form("","preview","")},300),"bootstrap"!=jQuery('select[name="set_form_theme"]').val()&&reset_field_theme(jQuery('select[name="set_form_theme"]').val(),e),e.hasClass("step")?(e.find(".form_field").each(function(){jQuery(this).attr("id","_"+Math.round(99999*Math.random()))}),t=nf_count_multi_steps(),jQuery("#timer_start").spinner("option","max",t),jQuery("#timer_end").spinner("option","max",t),jQuery(".muli-step-selection ul li:eq("+t+")").find("a").trigger("click"),jQuery("#ms-css-settings").show(),jQuery(".show_all_steps").show(),jQuery(".nf_step_breadcrumb").show(),0<t&&jQuery(".bc-outer-container").show(),nf_setup_grid(e.find(".nex_prev_steps"))):(e.offset(),setTimeout(function(){jQuery(".form_canvas").animate({scrollTop:3e4},100)},100))})}),Number.prototype.format=function(a,t){t="\\d(?=(\\d{"+(t||3)+"})+"+(0<a?"\\.":"$")+")";return this.toFixed(Math.max(0,~~a)).replace(new RegExp(t,"g"),"$&,")};