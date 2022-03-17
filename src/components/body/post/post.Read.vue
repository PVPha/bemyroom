<template>
  <div @click.prevent="" id="editorjs"></div>
</template>

<script>
import EditorJS from "@editorjs/editorjs";

//const Header = require("@editorjs/header");
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import LinkTool from "@editorjs/link";
import Embed from "@editorjs/embed";
import Quote from "@editorjs/quote";
import Delimiter from "@editorjs/delimiter";
//import ImageTool from "@editorjs/image";
import InlineImage from "editorjs-inline-image";
import SimpleImage from "simple-image-editorjs";

export default {
  name: "Read",
  data() {
    return {
      data_post: {
        title: "",
        content: "",
        introduction: "",
        poster: "",
        tag_id: 1,
      },
    };
  },
  beforeCreate() {},
  computed: {
    detail() {
      return this.$store.state.detail;
    },
  },
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
          inlineToolbar: true,
        },
        paragraph: {
          class: Paragraph,
          toolbox: false,
        },
        link: {
          class: LinkTool,
          config: {
            endPoint: "http://localhost:8008/fetchUrl",
          },
        },
        // linkTool: LinkTool,
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              coub: true,
              instagram: true,
              facebook: true,
              pinterest: true,
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
        // image: {
        //   class: ImageTool,
        //   config: {
        //     endpoints: {
        //       byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
        //       byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
        //     },
        //   },
        // },
        image: SimpleImage,
        unplash: {
          //https://github.com/kommitters/editorjs-inline-image
          class: InlineImage,
          inlineToolbar: true,
          title: "unsplash",
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
            //Image: "unsplash",
            //InlineImage: "unsplash",
          },
          //   tools: {
          //     unplash: {
          //       Title: "unplash",
          //     },
          //   },
        },
      },
      onReady: () => {
        // this.$store.dispatch("getPost");
        //console.log(JSON.parse(this.$store.state.posts[0].content));
        //custom editorjs
        this.$store.dispatch("detailPost", this.$route.params.slug).then(() => {
          editor.blocks.render(JSON.parse(this.detail.content)).then(() => {
            document
              .querySelectorAll("[contenteditable=true]")
              .forEach((item) => {
                item.setAttribute("contenteditable", "false");
              });
            document.querySelector(".ce-toolbar__actions").style.display =
              "none";
            document
              .querySelectorAll(".inline-image__caption")
              .forEach((item) => {
                item.setAttribute("contenteditable", "false");
              });
          });
        });

        document.querySelector(".ce-header").style.fontSize = "3rem";
        var paragraph = document.querySelector(".ce-paragraph");
        paragraph.setAttribute("data-placeholder", "Nội dung bài viết");
        paragraph.addEventListener("keyup", () => {
          paragraph.setAttribute("data-placeholder", "");
        });
        paragraph.addEventListener("click", () => {
          paragraph.setAttribute("data-placeholder", "");
        });
        document.querySelector(".ce-toolbox__button:last-child").innerHTML =
          '<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="unsplash" class="svg-inline--fa fa-unsplash fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15"><path fill="currentColor" d="M448,230.17V480H0V230.17H141.13V355.09H306.87V230.17ZM306.87,32H141.13V156.91H306.87Z"></path></svg>';
        document.querySelector(".codex-editor__redactor").style.paddingBottom =
          "25rem";
        //
      },
      onChange: () => {},
    });
    console.log(editor);

    // get post
  },
  methods: {
    save() {},
    getTagID(tag) {
      console.log(tag);
    },
  },
  //   computed: {
  //     post() {
  //       return this.$store.state.post;
  //     },
  //   },
};
</script>

<style>
#editorjs {
  font-size: 1.6rem;
  text-align: left;
  margin-top: 5rem;
  /* pointer-events: none; */
}
/* .codex-editor__redactor {
  pointer-events: none;
} */
.cdx-block {
  caret-color: transparent;
}
.inline-image__caption {
  pointer-events: none;
}
.ce-toolbar__plus {
  display: none;
}
#save-article {
  font-size: 1.5rem;
  border: 1px solid;
  padding: 1rem;
  margin-bottom: 5rem;
}
#save {
  display: none;
  position: absolute;
  top: 0;
  background: #ffffffe8;
  width: 100%;
  height: 100%;
  z-index: 2;
  font-size: 1.5rem;
}
#save .form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70rem;
}
#save .form label {
  float: left;
}
#save .form input {
  padding: 3rem 0;
}
.form-control {
  font-size: 2rem !important;
}
.tag_id {
  padding: 0.5rem 2rem;
  background: #f1f0f0;
  margin: 1rem 0.5rem;
  border-radius: 0.5rem;
}
.tag_id:hover {
  background: #dad8d8;
}
</style>