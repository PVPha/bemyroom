<template>
  <div id="editorjs"></div>
  <!-- <button id="save-temp">Lưu nháp</button> -->
  <button id="save-article">Lưu bài viết</button>
  <div id="save">
    <div class="form">
      <div class="form-group">
        <label for="description"
          >Mô tả bài viết <span>(Không bắt buộc)</span>
        </label>
        <textarea
          class="form-control"
          name="description"
          rows="3"
          cols="10"
        ></textarea>
      </div>
      <label for=""> Thêm thẻ tag <span>(tối đa 5 thẻ)</span> </label>
      <div>
        <div id="search-autocomplete" style="width: 100%">
          <input type="search" id="search_tag" class="form-control" />
          <div id="choose"></div>
          <div id="result"></div>
        </div>
        <div class="input-group">
          <!-- <button type="button" class="btn">
            <i class="fas fa-search"></i>
          </button> -->
          <!-- <div id="search-autocomplete" style="width: 96%">
            <input type="search" id="form1" class="form-control" />
          </div> -->
        </div>
      </div>
    </div>
  </div>
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
import ImageTool from "@editorjs/image";
import InlineImage from "editorjs-inline-image";
// import SimpleImage from "simple-image-editorjs";
import axios from "axios";

import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbMvhLX4vwc5s0QtLSLYMcmyLsh47xlOo",
  authDomain: "be-my-room.firebaseapp.com",
  projectId: "be-my-room",
  storageBucket: "be-my-room.appspot.com",
  messagingSenderId: "555218241540",
  appId: "1:555218241540:web:ef4c1534d14192d0a0cd51",
  measurementId: "G-6WMKBB63L3",
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export default {
  name: "Editor",
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
  methods: {
    save() {},
    getTagID(tag) {
      console.log(tag);
    },
    getImg(path) {
      return this.$store.dispatch("getImageFB", path);
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
        image: {
          class: ImageTool,
          config: {
            // endpoints: {
            //   byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
            //   // byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
            // },
            uploader: {
              uploadByFile(file) {
                var formData = new FormData();
                const path = [];
                formData.append("image", file);
                return axios
                  .post("https://storeimage.herokuapp.com/upload", formData, {
                    headers: {
                      "Content-Type": "multipart/form-data",
                    },
                  })
                  .then(async function (e) {
                    const pathReference = ref(storage, e.data);
                    await getDownloadURL(pathReference).then((url) => {
                      path[0] = url;
                    });
                    return {
                      success: 1,
                      file: {
                        url: path[0],
                        // any other image data you want to store, such as width, height, color, extension, etc
                      },
                    };
                  });
              },
            },
          },
        },
        // image: SimpleImage,
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
            //Image: "unsplash",
            //InlineImage: "unsplash",
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
          // {
          //   type: "embed",
          //   data: {
          //     service: "coub",
          //     source: "https://coub.com/view/1czcdf",
          //     embed: "https://coub.com/embed/1czcdf",
          //     width: 580,
          //     height: 320,
          //     caption: "My Life",
          //   },
          // },
        ],
      },
      onReady: () => {
        //custom editorjs
        document.querySelector(".ce-header").style.fontSize = "3rem";
        var paragraph = document.querySelector(".ce-paragraph");
        paragraph.setAttribute("data-placeholder", "Nội dung bài viết");
        paragraph.addEventListener("keyup", () => {
          paragraph.setAttribute("data-placeholder", "");
        });
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
          "25rem";

        //edit tooltip title
        // document.querySelectorAll(".ce-toolbox__button").forEach((item) => {
        //   if (item.getAttribute("data-tool") == "unplash") {
        //     item.addEventListener("mouseover", () => {
        //       console.log(
        //         document.querySelector(".ce-toolbox-button-tooltip").innerHTML
        //       );
        //       document.querySelector(".ce-toolbox-button-tooltip").innerHTML =
        //         "unplash";
        //     });
        //   }
        // });

        //editor.blocks.render(JSON.parse(this.post.data._data[1].content));

        // create post
        var saveBtn = document.getElementById("save-article");
        //var save = document.getElementById("save");

        saveBtn.addEventListener("click", () => {
          editor
            .save()
            .then((output) => {
              //console.log("article data: " + output.blocks[0].type);
              let intro_temp = "";
              let intro = "";
              let start = 0;
              let image = null;
              const count = output.blocks.length;
              for (let i = 0; i < count; i++) {
                if (output.blocks[i].type == "paragraph") {
                  //console.log(output.blocks[i].data);
                  intro_temp = output.blocks[i].data.text;
                  for (let j = 0; j < 15; j++) {
                    if (
                      intro_temp.indexOf(
                        " ",
                        intro_temp.indexOf(" ", start) + j
                      ) < 0
                    ) {
                      break;
                    }
                    console.log(
                      start +
                        ", " +
                        intro_temp.indexOf(
                          " ",
                          intro_temp.indexOf(" ", start) + j
                        )
                    );
                    intro += intro_temp.substring(
                      start,
                      intro_temp.indexOf(
                        " ",
                        intro_temp.indexOf(" ", start) + j
                      )
                    );
                    start = intro_temp.indexOf(
                      " ",
                      intro_temp.indexOf(" ", start) + j
                    );
                  }
                  // console.log(
                  //   intro.substr(0, intro.indexOf(" ", intro.indexOf(" ") + 20))
                  // );
                  break;
                }
              }
              for (let i = 0; i < count; i++) {
                if (
                  // output.blocks[i].type == "unplash" ||
                  output.blocks[i].type == "image"
                ) {
                  image = output.blocks[i].data.file.url;
                  break;
                } else if (output.blocks[i].type == "unplash") {
                  image = output.blocks[i].data.url;
                  break;
                } else {
                  image = "";
                }
              }
              console.log(intro);
              const formData = {
                title: output.blocks[0].data.text,
                content: JSON.stringify(output),
                introduction: intro + "...",
                poster: image,
                tag_id: 1,
              };
              console.log(formData);
              this.$store.dispatch("createPost", formData);
            })
            .catch((error) => {
              console.log(error);
            });
          //save.style.display = "block";
          //console.log(this.data_post);
        });

        //get post
        //var save_temp = document.getElementById("save-temp");
        //save_temp.addEventListener("click", () => {
        //console.log(this.post.data._data[1].content);
        //editor.blocks.render(JSON.parse(this.post.data._data[1].content));
        //});
      },
      onChange: () => {},
    });
    console.log(editor);

    // get post
    this.$store.dispatch("getPost");
  },
  // mounted() {
  //   const basicAutocomplete = document.querySelector(
  //     "#search-autocomplete #result"
  //   );
  //   const data = ["One", "Two", "Three", "Four", "Five"];
  //   const dataFilter = (value) => {
  //     return data.filter((item) => {
  //       // return item.toLowerCase().startsWith(value.toLowerCase());
  //       return item.toLowerCase().includes(value.toLowerCase());
  //     });
  //   };
  //   const searchTag = document.querySelector("#search_tag");
  //   // const btn_tag = document.querySelectorAll(".tag_id");
  //   const tag = [];
  //   searchTag.addEventListener("keyup", () => {
  //     document.querySelectorAll(".tag_id").forEach((item) => {
  //       if (!tag.includes(item.innerHTML)) {
  //         tag.push(item.innerHTML);
  //       }
  //     });
  //     console.log(tag);
  //     const tag_id = dataFilter(searchTag.value);
  //     if (searchTag.value != "") {
  //       tag_id.forEach((value) => {
  //         if (!tag.includes(value)) {
  //           const nodeTagID = document.createElement("button");
  //           nodeTagID.classList.add("tag_id");
  //           nodeTagID.appendChild(document.createTextNode(value));
  //           basicAutocomplete.appendChild(nodeTagID);
  //         }
  //       });
  //     } else {
  //       tag.splice(0, tag.length);
  //       document.querySelectorAll("#result .tag_id").forEach((item) => {
  //         basicAutocomplete.removeChild(item);
  //       });
  //     }
  //     document.querySelectorAll(".tag_id").forEach((item) => {
  //       item.addEventListener("click", (value) => {
  //         console.log(value.path[0].innerHTML);
  //         const tag_choose = [];
  //         document.querySelectorAll("#choose .tag_id").forEach((item) => {
  //           if (!tag_choose.includes(item.innerHTML)) {
  //             tag_choose.push(item.innerHTML);
  //           }
  //         });
  //         if (!tag_choose.includes(value.path[0].innerHTML)) {
  //           const nodeTagID = document.createElement("button");
  //           nodeTagID.classList.add("tag_id");
  //           nodeTagID.appendChild(
  //             document.createTextNode(value.path[0].innerHTML)
  //           );
  //           document.querySelector("#choose").appendChild(nodeTagID);
  //         }
  //       });
  //     });
  //   });
  // },
  computed: {
    post() {
      return this.$store.state.post;
    },
  },
};
</script>

<style>
#editorjs {
  font-size: 1.6rem;
  text-align: left;
  margin-top: 5rem;
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