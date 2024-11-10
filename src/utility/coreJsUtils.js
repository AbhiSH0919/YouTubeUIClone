// ==============================REUSABLE-JavaScript-FUNCTIONS=================
// ==============================DATE-FORMATER=================================
/**
 * Format date : Convert date into a human-readable string with the days or weeks passed.
 *
 * If the date is today, returns "Today".
 *
 * If the date is yesterday, returns "Yesterday".
 *
 * If the date is within the last week, returns the number of days ago.
 *
 * If the date is within the last month, returns the number of weeks ago.
 *
 * Otherwise, returns the date in the format "Month Day, Year".
 *
 * @param {string} date - The date to format.(TimeZonal date)
 * @param {string} locale - User locale to use for date formatting.
 * @returns {string} The formatted date string.
 */
const formatDate = function (date, locale = "US") {
	if (date === "undefined") return;

	const calcDaysPassed = (oldDate, newDate) =>
		Math.round(Math.abs(newDate - oldDate) / (1000 * 60 * 60 * 24));

	const daysPassed = calcDaysPassed(new Date(date), new Date());

	if (daysPassed === 0) return "Today";
	if (daysPassed === 1) return "Yesterday";
	if (daysPassed <= 7) return `${daysPassed} Days ago`;
	if (daysPassed <= 28) return `${daysPassed / 7} Weeks ago`;
	else {
		// return new Intl.DateTimeFormat(locale, {
		// 	year: "numeric",
		// 	month: "short",
		// 	day: "2-digit",
		// }).format(new Date(date));

		const newDate = new Date(date);
		return newDate.toLocaleDateString(locale, {
			year: "numeric",
			month: "short",
			day: "2-digit",
		});
	}
};

// ==============================NUMBER-FORMATER===============================
/**
 * Format number : Convert a number into a human-readable string with K or M suffix.
 *
 * If the number is less than or equal to 999, returns the number as is.
 *
 * If the number is less than or equal to 999999, returns the number in thousands (e.g., 1.2K).
 *
 * If the number is greater than 999999, returns the number in millions (e.g., 1.2M).
 *
 * @param {number} num - The number to format.
 * @returns {string} The formatted number string.
 */
const formatNumber = function (num) {
	const number = +num;
	if (typeof number !== "number" || num === "undefined") return;

	if (number <= 999) return number;
	if (number <= 999999) return Math.trunc(number / 1000) + "K ";
	if (number > 999999) return Math.trunc(number / 1000000) + "M ";
};

// ==============================VIDEOS-TITLE-FORMATER=========================
/**
 * Format title : Manage length of the string.
 *
 * If the string length is less than or equal to 70, returns the string as it is.
 *
 * Otherwise return formated string with length is 70 but last 3 charactors is (...).
 *
 * @param {string} title - String to format. If not number convert to number first.
 * @returns {string} The formatted number string.
 */
const formatTitle = (title) =>
	title.length <= 70 ? title : title.slice(0, 67) + "...";

// ==============================FORMAT-DESCRIPTION-STRING=====================
/**
 * Format description : Convert a description string into a formatted string with links & hashtag.
 *
 * This function takes a description string, splits it into lines and words, and formats each word into a link if it starts with "#" or is a URL. The formatted string is then returned.
 *
 * @param {string} desc - The description string to format.
 * @returns {string} The formatted description string.
 */
const funFormatDesc = function (desc) {
	const arr = desc?.slice()?.split(`\n`);
	for (let i = 0; i < arr?.length; i++) {
		const newArr = arr[i]?.slice()?.split(" ");

		for (let j = 0; j < newArr.length; j++) {
			const item = newArr[j];

			const newItem = item?.startsWith("#")
				? `<a class="text-decoration-none" href=/hashtag/${item?.slice(
						1
				  )}>${item}</a>`
				: item?.includes("http")
				? `<a class="bg-secondary bg-opacity-25 text-light py-1 px-2 rounded-5" href="${item}" target="_blank">${item}</a>`
				: item;

			newArr[j] = newItem;
		}

		arr[i] = newArr?.join(" ");
	}

	const str = arr?.slice()?.join(`<br>`);

	return str;
};

// ==============================RANDOM-NUMBER-GENERATOR=======================
const randomNumber = ({ digits = 99999 }) =>
	Math.trunc(Math.random() * digits) + 1;

export { formatDate, formatNumber, formatTitle, funFormatDesc, randomNumber };
