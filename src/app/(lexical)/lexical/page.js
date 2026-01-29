"use client";

// export default function Process() {
//   return <div>hey</div>;
// }
// //

import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/lexical/Editor"), {
  ssr: false,
  loading: () => (
    <div className="editor-loading-state">Loading Lexical editor...</div>
  ),
});
// import "@/components/lexical/styles.css";

/* --------------------------2nd attempt at Lexical Editor-------------------------- */

// "use client";

// import { $getRoot, $getSelection } from "lexical";
// import { useEffect } from "react";

// import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
// import { LexicalComposer } from "@lexical/react/LexicalComposer";
// import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
// import { ContentEditable } from "@lexical/react/LexicalContentEditable";
// import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
// import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";

// const theme = {
//   // Theme styling goes here
//   //...
// };

// // Catch any errors that occur during Lexical updates and log them
// // or throw them as needed. If you don't throw them, Lexical will
// // try to recover gracefully without losing user data.
// function onError(error) {
//   console.error(error);
// }

// export default function Editor() {
//   const initialConfig = {
//     namespace: "MyEditor",
//     theme,
//     onError,
//   };

//   return (
//     <LexicalComposer initialConfig={initialConfig}>
//       <RichTextPlugin
//         contentEditable={
//           <ContentEditable
//             aria-placeholder={"Enter some text..."}
//             placeholder={<div>Enter some text...</div>}
//           />
//         }
//         ErrorBoundary={LexicalErrorBoundary}
//       />
//       <HistoryPlugin />
//       <AutoFocusPlugin />
//     </LexicalComposer>
//   );
// }

/*-------------------------- 3rd attempt at Lexical Editor --------------------------*/
// import "./styles.css";
// import Editor from "./Editor";

// import Editor from "@/components/lexical/Editor";

export default function App() {
  return (
    <div
      className="App"
      style={{
        padding: "20px",
        margin: "20px",
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // textAlign: "center",
      }}
    >
      <h1>Rich Text Example</h1>
      <p>Note: this is an experimental build of Lexical</p>
      <Editor />
      <div className="other">
        <h2>Other Examples</h2>
        <ul>
          <li>
            <a
              href="https://codesandbox.io/s/lexical-plain-text-example-g932e"
              target="_blank"
              rel="noreferrer"
            >
              Plain text example
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
