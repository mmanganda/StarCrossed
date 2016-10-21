/**
 * Translations
 */
(function(angular, undefined) {
angular
	.module('invisionApp')

	.constant('translations', (function () {
		'use strict';

		var translations = {
			modal: {},
			slideshow: {},
			comments: {}
		};

		translations.modal.modal_window = "Modal Window";
		translations.modal.close = "Close";
		translations.modal.item01 = "Item 01";
		translations.modal.item02 = "Item 02";
		translations.modal.item03 = "Item 03";
		translations.modal.item04 = "Item 04";
		translations.modal.item05 = "Item 05";

		translations.slideshow.skip_intro = "Skip Intro";
		translations.slideshow.one_of_three = "StarCrossed";
		translations.slideshow.one_text = "Sometimes one plus one is more than three.";
		translations.slideshow.one_description = "A 30-day mobile novella of love, betrayal and intrigue, revealed through the most intimate of exchanges.";
		translations.slideshow.two_of_three = "History and Herstory";
		translations.slideshow.two_text = "Explore their back stories from different perspectives.";
		translations.slideshow.two_description = "Delve into the memories, the dreams, the thoughts and passions coursing through their lives.";
		translations.slideshow.three_of_three = "The Affair";
		translations.slideshow.three_text = "What isn't said. What isn't heard.";
		translations.slideshow.three_description = "Follow daily, from their unexpected first encounter, a connection so intense - either a love supreme or a craving doomed to destruction.";

		translations.comments.no_comments = "No comments on this article yet.";


		return translations;
	})());

})(window.angular);
