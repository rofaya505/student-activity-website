const orderForm = document.querySelector("#order-form");
const productChoice = document.querySelector("#product-choice");
const formFeedback = document.querySelector("#form-feedback");
const orderPanel = document.querySelector("#order-panel");

// Clicking a merchandise button selects that product in the form.
const productButtons = document.querySelectorAll(".product-button");

productButtons.forEach(function (button) {
	button.addEventListener("click", function () {
		const chosenProduct = button.dataset.product;

		productChoice.value = chosenProduct;

		orderPanel.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	});
});

// Handle the demonstration order form.
orderForm.addEventListener("submit", function (event) {
	// Stop the browser from reloading the page.
	event.preventDefault();

	// Read the form values.
	const studentName = document
		.querySelector("#student-name")
		.value.trim();

	const studentEmail = document
		.querySelector("#student-email")
		.value.trim();

	const product = productChoice.value;

	const size = document
		.querySelector("#product-size")
		.value;

	// Basic validation.
	if (!studentName || !studentEmail || !product || !size) {
		formFeedback.textContent =
			"Please complete every field before submitting.";
		return;
	}

	// Show a demonstration confirmation.
	formFeedback.textContent =
		`Demo request ready for ${studentName}: ${product}, size ${size}. ` +
		"Nothing has been sent or saved.";

	console.log("Demo order request:", {
		studentName: studentName,
		studentEmail: studentEmail,
		product: product,
		size: size
	});

	// Clear the form after the demonstration.
	orderForm.reset();
});
