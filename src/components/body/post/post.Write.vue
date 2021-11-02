<template>
  <div id="editorjs"></div>
  <button id="save-article">Lưu bài viết</button>
</template>

<script>
import EditorJS from "@editorjs/editorjs";

//const Header = require("@editorjs/header");
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import Link from "@editorjs/link";
import Embed from "@editorjs/embed";
import Quote from "@editorjs/quote";
import Delimiter from "@editorjs/delimiter";
import ImageTool from "@editorjs/image";
import InlineImage from "editorjs-inline-image";
export default {
  name: "Editor",
  created() {
    var editor = new EditorJS({
      holder: "editorjs",
      tools: {
        header: {
          class: Header,
          config: {
            placeholder: "Tiêu đề bài viết...",
            levels: [2, 3, 4],
            defaultLevel: 2,
          },
          toolbox: false,
        },
        paragraph: {
          class: Paragraph,
          toolbox: false,
        },
        link: {
          class: Link,
          config: {
            endPoint: "",
          },
        },
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              coub: true,
            },
          },
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          // shortcut: "CMD+SHIFT+O",
          config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Enter a caption",
          },
        },
        delimiter: Delimiter,
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
              byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
            },
          },
        },
        unplash: {
          //https://github.com/kommitters/editorjs-inline-image
          class: InlineImage,
          inlineToolbar: true,
          config: {
            embed: {
              display: false,
            },
            unsplash: {
              appName: "bemyroom",
              clientId: "PpbDP7EHnjlRff4Xat5lgYSozxIDKguZVrDLCXDzgUc",
            },
          },
        },
      },
      i18n: {
        messages: {
          ui: {
            toolbar: {
              toolbox: {
                Add: "Công cụ",
              },
            },
          },
          toolNames: {
            Text: "Văn bản",
            Heading: "Tiêu đề",
          },
        },
      },
      data: {
        time: 1552744582955,
        blocks: [
          {
            id: "header-post",
            type: "header",
          },
          {
            type: "paragraph",
          },
        ],
      },
      onReady: () => {
        document.querySelector(".ce-header").style.fontSize = "3rem";
        var paragraph = document.querySelector(".ce-paragraph");
        paragraph.setAttribute("data-placeholder", "Nội dung bài viết");
        paragraph.addEventListener("click", () => {
          paragraph.setAttribute("data-placeholder", "");
        });
        // if (document.querySelector(".ce-toolbox--opened") != null) {
        //   paragraph.setAttribute("data-placeholder", "");
        // }
        // document.querySelector(".ce-paragraph:empty::before").style.opacity =
        //   "1";
        document.querySelector(".ce-toolbox__button:last-child").innerHTML =
          '<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="unsplash" class="svg-inline--fa fa-unsplash fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15"><path fill="currentColor" d="M448,230.17V480H0V230.17H141.13V355.09H306.87V230.17ZM306.87,32H141.13V156.91H306.87Z"></path></svg>';
        document.querySelector(".codex-editor__redactor").style.paddingBottom =
          "38rem";
        var saveBtn = document.getElementById("save-article");
        saveBtn.addEventListener("click", () => {
          editor
            .save()
            .then((output) => {
              console.log("article data: " + output);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      },
      onChange: () => {},
    });
    console.log(editor);
    //
  },
  methods: {
    save() {},
  },
};
</script>

<style scoped>
#editorjs {
  font-size: 1.6rem;
  text-align: left;
}
#editorjs h2 {
  font-size: 3rem !important;
}
#save-article {
  font-size: 1.5rem;
  border: 1px solid;
  padding: 1rem;
}
</style>