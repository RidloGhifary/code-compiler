# **Online Code Compiler**

A web-based online code compiler. This app allows users to write code, compile it, and see the results in real time.

## **Features**

- 🖥️ **Multi-language support:** Compile code in various programming languages (Python, Java, etc.).
- 🧩 **State Management with Zustand:** Efficient state handling across the app.
- 🖼️ **Dynamic Language Selection:** Switch between languages seamlessly using the custom language selector component.
- 🔒 **Protected Routes & Security:** Ensures security with custom headers for API requests.

## **Usage**

1. Select a programming language from the dropdown menu.
2. Write your code in the text editor.
3. Click **Run** to execute the code.
4. View the output in the results section.

## **Project Structure**

```bash
.
├── components/       # UI components (Buttons, Inputs, etc.)
├── hooks/            # Zustand store hooks for managing global state
├── actions/          # API call functions (e.g., compile function)
├── public/           # Static assets
├── app/              # Next.js app router
├── constants/        # Language constants and config
├── lib/              # Config
├── providers/        # Global state providers for the app
├── .env.example      # Example of environment variables
└── README.md         # Project documentation
```
