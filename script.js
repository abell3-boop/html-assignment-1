// ============================================
// BUTTON CHANGES CONTENT
// ============================================

const messageButton =
    document.getElementById("messageButton");

const message =
    document.getElementById("message");


messageButton.addEventListener("click", function () {

    message.textContent =
        "Great job! You clicked the button!";

});


// ============================================
// STYLE CHANGES WHEN TYPING
// ============================================

const nameInput =
    document.getElementById("nameInput");

const nameMessage =
    document.getElementById("nameMessage");


if (nameInput && nameMessage) {

    nameInput.addEventListener("input", function () {

        if (nameInput.value.length > 0) {

            nameInput.style.backgroundColor =
                "#e6f0ff";

            nameInput.style.border =
                "2px solid #4a6fa5";

            nameMessage.textContent =
                "Nice! You are typing.";

        } else {

            nameInput.style.backgroundColor =
                "white";

            nameInput.style.border =
                "1px solid #999";

            nameMessage.textContent =
                "Start typing to change the style!";

        }

    });

}


// ============================================
// DYNAMIC LIST
// ============================================

const itemInput =
    document.getElementById("itemInput");

const addItemButton =
    document.getElementById("addItemButton");

const learningList =
    document.getElementById("learningList");


addItemButton.addEventListener("click", function () {

    const newItemText =
        itemInput.value.trim();


    if (newItemText !== "") {

        const newListItem =
            document.createElement("li");

        newListItem.textContent =
            newItemText;

        learningList.appendChild(
            newListItem
        );

        itemInput.value = "";

    }

});


// ============================================
// CONTACT FORM VALIDATION
// ============================================

const contactForm =
    document.getElementById("contactForm");

const contactName =
    document.getElementById("nameInput");

const contactEmail =
    document.getElementById("emailInput");

const contactTopic =
    document.getElementById("topicInput");

const contactMessage =
    document.getElementById("messageInput");


const nameError =
    document.getElementById("nameError");

const emailError =
    document.getElementById("emailError");

const topicError =
    document.getElementById("topicError");

const messageError =
    document.getElementById("messageError");

const formStatus =
    document.getElementById("formStatus");


// ============================================
// ERROR FUNCTION
// ============================================

function showError(
    input,
    errorElement,
    errorText
) {

    errorElement.textContent =
        errorText;

    input.classList.add(
        "input-error"
    );

    input.setAttribute(
        "aria-invalid",
        "true"
    );

}


// ============================================
// CLEAR ERROR FUNCTION
// ============================================

function clearError(
    input,
    errorElement
) {

    errorElement.textContent =
        "";

    input.classList.remove(
        "input-error"
    );

    input.removeAttribute(
        "aria-invalid"
    );

}


// ============================================
// FORM SUBMISSION
// ============================================

contactForm.addEventListener(
    "submit",
    function (event) {

        // REQUIRED:
        // Prevent the page from refreshing.
        event.preventDefault();


        let formIsValid = true;


        // Clear old errors

        clearError(
            contactName,
            nameError
        );

        clearError(
            contactEmail,
            emailError
        );

        clearError(
            contactTopic,
            topicError
        );

        clearError(
            contactMessage,
            messageError
        );


        formStatus.textContent =
            "";


        // =====================================
        // CHECK NAME
        // =====================================

        if (
            contactName.value.trim() === ""
        ) {

            showError(
                contactName,
                nameError,
                "Please enter your name."
            );

            formIsValid = false;

        }


        // =====================================
        // CHECK EMAIL
        // =====================================

        if (
            contactEmail.value.trim() === ""
        ) {

            showError(
                contactEmail,
                emailError,
                "Please enter your email address."
            );

            formIsValid = false;

        }

        else if (
            !contactEmail.validity.valid
        ) {

            showError(
                contactEmail,
                emailError,
                "Please enter a valid email address."
            );

            formIsValid = false;

        }


        // =====================================
        // CHECK REASON
        // =====================================

        if (
            contactTopic.value === ""
        ) {

            showError(
                contactTopic,
                topicError,
                "Please select a reason for contact."
            );

            formIsValid = false;

        }


        // =====================================
        // CHECK MESSAGE
        // =====================================

        if (
            contactMessage.value.trim() === ""
        ) {

            showError(
                contactMessage,
                messageError,
                "Please enter a message."
            );

            formIsValid = false;

        }


        // =====================================
        // INVALID FORM
        // =====================================

        if (!formIsValid) {

            formStatus.textContent =
                "Please correct the errors above.";

            return;

        }


        // =====================================
        // VALID FORM
        // =====================================

        formStatus.textContent =
            "Form submitted successfully!";

        contactForm.reset();

    }
);


// ============================================
// CLEAR NAME ERROR WHILE TYPING
// ============================================

contactName.addEventListener(
    "input",
    function () {

        if (
            contactName.value.trim() !== ""
        ) {

            clearError(
                contactName,
                nameError
            );

        }

    }
);


// ============================================
// CLEAR EMAIL ERROR WHILE CORRECTING
// ============================================

contactEmail.addEventListener(
    "input",
    function () {

        /*
         * Once the email becomes valid,
         * automatically remove the error.
         */

        if (
            contactEmail.validity.valid
        ) {

            clearError(
                contactEmail,
                emailError
            );

        }

    }
);


// ============================================
// CLEAR TOPIC ERROR
// ============================================

contactTopic.addEventListener(
    "change",
    function () {

        if (
            contactTopic.value !== ""
        ) {

            clearError(
                contactTopic,
                topicError
            );

        }

    }
);


// ============================================
// CLEAR MESSAGE ERROR
// ============================================

contactMessage.addEventListener(
    "input",
    function () {

        if (
            contactMessage.value.trim() !== ""
        ) {

            clearError(
                contactMessage,
                messageError
            );

        }

    }
);


// ============================================
// BONUS: PUBLIC API
// ============================================

const quoteButton =
    document.getElementById("quoteButton");

const quoteResult =
    document.getElementById("quoteResult");


quoteButton.addEventListener(
    "click",
    function () {

        quoteResult.textContent =
            "Loading...";


        fetch(
            "https://api.quotable.io/random"
        )

            .then(function (response) {

                // Check for an unsuccessful response

                if (!response.ok) {

                    throw new Error(
                        "API request failed."
                    );

                }

                return response.json();

            })

            .then(function (data) {

                // Display API result in the DOM

                quoteResult.textContent =
                    `"${data.content}" — ${data.author}`;

            })

            .catch(function (error) {

                // Display error in the DOM

                quoteResult.textContent =
                    "Sorry, the quote could not be loaded.";

                console.error(error);

            });

    }
);
