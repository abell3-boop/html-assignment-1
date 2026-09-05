```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Alisa's Web Page</title>

    <link rel="stylesheet" href="styles.css">
</head>

<body>

    <header>
        <h1>Alisa's Web Page</h1>

        <nav>
            <a href="#about">About Me</a>
            <a href="#learning">What I'm Learning</a>
            <a href="#javascript">JavaScript</a>
        </nav>
    </header>


    <main>

        <!-- ABOUT SECTION -->
        <section id="about">
            <h2>About Me</h2>

            <p>
                Welcome to my webpage! My name is Alisa. I am a college
                student interested in technology and cybersecurity.
            </p>

            <p>
                I am learning how to create websites using HTML, CSS,
                and JavaScript.
            </p>
        </section>


        <!-- LEARNING SECTION -->
        <section id="learning">
            <h2>What I'm Learning</h2>

            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Web Development</li>
                <li>Cybersecurity</li>
            </ul>
        </section>


        <!-- JAVASCRIPT SECTION -->
        <section id="javascript">

            <h2>JavaScript Interactions</h2>


            <!-- 1. BUTTON CHANGES CONTENT -->
            <div class="interactive-box">

                <h3>Button Interaction</h3>

                <p id="message">
                    Click the button to change this message.
                </p>

                <button id="messageButton" type="button">
                    Change Message
                </button>

            </div>


            <!-- 2. STYLE CHANGES ON INPUT -->
            <div class="interactive-box">

                <h3>Input Interaction</h3>

                <label for="nameInput">
                    Type your name:
                </label>

                <input
                    type="text"
                    id="nameInput"
                    placeholder="Enter your name"
                >

                <p id="nameMessage">
                    Start typing to change the style!
                </p>

            </div>


            <!-- 3. DYNAMIC LIST -->
            <div class="interactive-box">

                <h3>Dynamic Learning List</h3>

                <label for="itemInput">
                    Add something you are learning:
                </label>

                <input
                    type="text"
                    id="itemInput"
                    placeholder="Enter an item"
                >

                <button id="addItemButton" type="button">
                    Add Item
                </button>

                <ul id="learningList">
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>

            </div>

        </section>

    </main>


    <footer>
        <p>&copy; 2026 Alisa's Web Page</p>
    </footer>


    <!-- JavaScript file - ONLY INCLUDE IT ONCE -->
    <script src="script.js"></script>

</body>

</html>
```
