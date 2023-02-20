"use strict";
const airport = {
  "list": [{
    "letter": "A",
    "data": [
      "\u963F\u514B\u82CF\u673A\u573A",
      "\u963F\u62C9\u5C71\u53E3\u673A\u573A",
      "\u963F\u52D2\u6CF0\u673A\u573A",
      "\u963F\u91CC\u6606\u838E\u673A\u573A",
      "\u5B89\u5E86\u5929\u67F1\u5C71\u673A\u573A",
      "\u6FB3\u95E8\u56FD\u9645\u673A\u573A"
    ]
  }, {
    "letter": "B",
    "data": [
      "\u4FDD\u5C71\u673A\u573A",
      "\u5305\u5934\u673A\u573A",
      "\u5317\u6D77\u798F\u6210\u673A\u573A",
      "\u5317\u4EAC\u5357\u82D1\u673A\u573A",
      "\u5317\u4EAC\u9996\u90FD\u56FD\u9645\u673A\u573A"
    ]
  }, {
    "letter": "C",
    "data": [
      "\u957F\u767D\u5C71\u673A\u573A",
      "\u957F\u6625\u9F99\u5609\u56FD\u9645\u673A\u573A",
      "\u5E38\u5FB7\u6843\u82B1\u6E90\u673A\u573A",
      "\u660C\u90FD\u90A6\u8FBE\u673A\u573A",
      "\u957F\u6C99\u9EC4\u82B1\u56FD\u9645\u673A\u573A",
      "\u957F\u6CBB\u738B\u6751\u673A\u573A",
      "\u5E38\u5DDE\u5954\u725B\u673A\u573A",
      "\u6210\u90FD\u53CC\u6D41\u56FD\u9645\u673A\u573A",
      "\u8D64\u5CF0\u673A\u573A"
    ]
  }, {
    "letter": "D",
    "data": [
      "\u5927\u7406\u673A\u573A",
      "\u5927\u8FDE\u5468\u6C34\u5B50\u56FD\u9645\u673A\u573A",
      "\u5927\u5E86\u8428\u5C14\u56FE\u673A\u573A",
      "\u5927\u540C\u4E1C\u738B\u5E84\u673A\u573A",
      "\u8FBE\u5DDE\u6CB3\u5E02\u673A\u573A",
      "\u4E39\u4E1C\u6D6A\u5934\u673A\u573A",
      "\u5FB7\u5B8F\u8292\u5E02\u673A\u573A",
      "\u8FEA\u5E86\u9999\u683C\u91CC\u62C9\u673A\u573A",
      "\u4E1C\u8425\u673A\u573A",
      "\u6566\u714C\u673A\u573A"
    ]
  }, {
    "letter": "E",
    "data": [
      "\u9102\u5C14\u591A\u65AF\u673A\u573A",
      "\u6069\u65BD\u8BB8\u5BB6\u576A\u673A\u573A",
      "\u4E8C\u8FDE\u6D69\u7279\u8D5B\u4E4C\u82CF\u56FD\u9645\u673A\u573A"
    ]
  }, {
    "letter": "F",
    "data": [
      "\u961C\u9633\u897F\u5173\u673A\u573A",
      "\u798F\u5DDE\u957F\u4E50\u56FD\u9645\u673A\u573A"
    ]
  }, {
    "letter": "G",
    "data": [
      "\u8D63\u5DDE\u9EC4\u91D1\u673A\u573A",
      "\u683C\u5C14\u6728\u673A\u573A",
      "\u56FA\u539F\u516D\u76D8\u5C71\u673A\u573A",
      "\u5E7F\u5143\u76D8\u9F99\u673A\u573A",
      "\u5E7F\u5DDE\u767D\u4E91\u56FD\u9645\u673A\u573A",
      "\u6842\u6797\u4E24\u6C5F\u56FD\u9645\u673A\u573A",
      "\u8D35\u9633\u9F99\u6D1E\u5821\u56FD\u9645\u673A\u573A"
    ]
  }, {
    "letter": "H",
    "data": [
      "\u54C8\u5C14\u6EE8\u592A\u5E73\u56FD\u9645\u673A\u573A",
      "\u54C8\u5BC6\u673A\u573A",
      "\u6D77\u53E3\u7F8E\u5170\u56FD\u9645\u673A\u573A",
      "\u6D77\u62C9\u5C14\u4E1C\u5C71\u56FD\u9645\u673A\u573A",
      "\u90AF\u90F8\u673A\u573A",
      "\u6C49\u4E2D\u673A\u573A",
      "\u676D\u5DDE\u8427\u5C71\u56FD\u9645\u673A\u573A",
      "\u5408\u80A5\u9A86\u5C97\u56FD\u9645\u673A\u573A",
      "\u548C\u7530\u673A\u573A",
      "\u9ED1\u6CB3\u673A\u573A",
      "\u547C\u548C\u6D69\u7279\u767D\u5854\u56FD\u9645\u673A\u573A",
      "\u6DEE\u5B89\u6D9F\u6C34\u673A\u573A",
      "\u9EC4\u5C71\u5C6F\u6EAA\u56FD\u9645\u673A\u573A"
    ]
  }, {
    "letter": "I",
    "data": []
  }, {
    "letter": "J",
    "data": [
      "\u6D4E\u5357\u9065\u5899\u56FD\u9645\u673A\u573A",
      "\u6D4E\u5B81\u66F2\u961C\u673A\u573A",
      "\u9E21\u897F\u5174\u51EF\u6E56\u673A\u573A",
      "\u4F73\u6728\u65AF\u4E1C\u90CA\u673A\u573A",
      "\u5609\u5CEA\u5173\u673A\u573A",
      "\u9526\u5DDE\u5C0F\u5CAD\u5B50\u673A\u573A",
      "\u666F\u5FB7\u9547\u673A\u573A",
      "\u4E95\u5188\u5C71\u673A\u573A",
      "\u4E5D\u6C5F\u5E90\u5C71\u673A\u573A",
      "\u4E5D\u5BE8\u9EC4\u9F99\u673A\u573A"
    ]
  }, {
    "letter": "K",
    "data": [
      "\u5580\u4EC0\u673A\u573A",
      "\u514B\u62C9\u739B\u4F9D\u673A\u573A",
      "\u5E93\u8F66\u9F9F\u5179\u673A\u573A",
      "\u5E93\u5C14\u52D2\u673A\u573A",
      "\u6606\u660E\u5DEB\u5BB6\u575D\u56FD\u9645\u673A\u573A"
    ]
  }, {
    "letter": "L",
    "data": [
      "\u62C9\u8428\u8D21\u560E\u673A\u573A",
      "\u5170\u5DDE\u4E2D\u5DDD\u673A\u573A",
      "\u4E3D\u6C5F\u4E09\u4E49\u673A\u573A",
      "\u9ECE\u5E73\u673A\u573A",
      "\u8FDE\u4E91\u6E2F\u767D\u5854\u57E0\u673A\u573A",
      "\u4E34\u6CA7\u673A\u573A",
      "\u4E34\u6C82\u673A\u573A",
      "\u6797\u829D\u7C73\u6797\u673A\u573A",
      "\u67F3\u5DDE\u767D\u83B2\u673A\u573A",
      "\u9F99\u5CA9\u51A0\u8C78\u5C71\u673A\u573A",
      "\u6CF8\u5DDE\u84DD\u7530\u673A\u573A",
      "\u6D1B\u9633\u5317\u90CA\u673A\u573A"
    ]
  }, {
    "letter": "M",
    "data": [
      "\u6EE1\u6D32\u91CC\u897F\u90CA\u673A\u573A",
      "\u7EF5\u9633\u5357\u90CA\u673A\u573A",
      "\u6F20\u6CB3\u53E4\u83B2\u673A\u573A",
      "\u7261\u4E39\u6C5F\u6D77\u6D6A\u673A\u573A"
    ]
  }, {
    "letter": "N",
    "data": [
      "\u5357\u660C\u660C\u5317\u56FD\u9645\u673A\u573A",
      "\u5357\u5145\u9AD8\u576A\u673A\u573A",
      "\u5357\u4EAC\u7984\u53E3\u56FD\u9645\u673A\u573A",
      "\u5357\u5B81\u5434\u5729\u673A\u573A",
      "\u5357\u901A\u5174\u4E1C\u673A\u573A",
      "\u5357\u9633\u59DC\u8425\u673A\u573A",
      "\u5B81\u6CE2\u680E\u793E\u56FD\u9645\u673A\u573A"
    ]
  }, {
    "letter": "O",
    "data": []
  }, {
    "letter": "P",
    "data": [
      "\u666E\u6D31\u601D\u8305\u673A\u573A"
    ]
  }, {
    "letter": "Q",
    "data": [
      "\u9F50\u9F50\u54C8\u5C14\u4E09\u5BB6\u5B50\u673A\u573A",
      "\u79E6\u7687\u5C9B\u5C71\u6D77\u5173\u673A\u573A",
      "\u9752\u5C9B\u6D41\u4EAD\u56FD\u9645\u673A\u573A",
      "\u8862\u5DDE\u673A\u573A",
      "\u6CC9\u5DDE\u664B\u6C5F\u673A\u573A"
    ]
  }, {
    "letter": "R",
    "data": [
      "\u65E5\u5580\u5219\u548C\u5E73\u673A\u573A"
    ]
  }, {
    "letter": "S",
    "data": [
      "\u4E09\u4E9A\u51E4\u51F0\u56FD\u9645\u673A\u573A",
      "\u6C55\u5934\u5916\u7802\u673A\u573A",
      "\u4E0A\u6D77\u8679\u6865\u56FD\u9645\u673A\u573A",
      "\u4E0A\u6D77\u6D66\u4E1C\u56FD\u9645\u673A\u573A",
      "\u6DF1\u5733\u5B9D\u5B89\u56FD\u9645\u673A\u573A",
      "\u6C88\u9633\u6843\u4ED9\u56FD\u9645\u673A\u573A",
      "\u77F3\u5BB6\u5E84\u6B63\u5B9A\u56FD\u9645\u673A\u573A",
      "\u82CF\u5357\u7855\u653E\u56FD\u9645\u673A\u573A"
    ]
  }, {
    "letter": "T",
    "data": [
      "\u5854\u57CE\u673A\u573A",
      "\u592A\u539F\u6B66\u5BBF\u56FD\u9645\u673A\u573A",
      "\u53F0\u5DDE\u8DEF\u6865\u673A\u573A (\u9EC4\u5CA9\u673A\u573A)",
      "\u5510\u5C71\u4E09\u5973\u6CB3\u673A\u573A",
      "\u817E\u51B2\u9A7C\u5CF0\u673A\u573A",
      "\u5929\u6D25\u6EE8\u6D77\u56FD\u9645\u673A\u573A",
      "\u901A\u8FBD\u673A\u573A",
      "\u94DC\u4EC1\u51E4\u51F0\u673A\u573A"
    ]
  }, {
    "letter": "U",
    "data": []
  }, {
    "letter": "V",
    "data": []
  }, {
    "letter": "W",
    "data": [
      "\u4E07\u5DDE\u4E94\u6865\u673A\u573A",
      "\u6F4D\u574A\u673A\u573A",
      "\u5A01\u6D77\u5927\u6C34\u6CCA\u673A\u573A",
      "\u6587\u5C71\u666E\u8005\u9ED1\u673A\u573A",
      "\u6E29\u5DDE\u6C38\u5F3A\u56FD\u9645\u673A\u573A",
      "\u4E4C\u6D77\u673A\u573A",
      "\u6B66\u6C49\u5929\u6CB3\u56FD\u9645\u673A\u573A",
      "\u4E4C\u5170\u6D69\u7279\u673A\u573A",
      "\u4E4C\u9C81\u6728\u9F50\u5730\u7A9D\u5821\u56FD\u9645\u673A\u573A",
      "\u6B66\u5937\u5C71\u673A\u573A",
      "\u68A7\u5DDE\u957F\u6D32\u5C9B\u673A\u573A"
    ]
  }, {
    "letter": "X",
    "data": [
      "\u897F\u5B89\u54B8\u9633\u56FD\u9645\u673A\u573A",
      "\u897F\u660C\u9752\u5C71\u673A\u573A",
      "\u9521\u6797\u6D69\u7279\u673A\u573A",
      "\u897F\u5B81\u66F9\u5BB6\u5821\u673A\u573A",
      "\u897F\u53CC\u7248\u7EB3\u560E\u6D12\u673A\u573A",
      "\u53A6\u95E8\u9AD8\u5D0E\u56FD\u9645\u673A\u573A",
      "\u9999\u6E2F\u56FD\u9645\u673A\u573A",
      "\u8944\u9633\u5218\u96C6\u673A\u573A",
      "\u5174\u4E49\u673A\u573A",
      "\u5F90\u5DDE\u89C2\u97F3\u673A\u573A"
    ]
  }, {
    "letter": "Y",
    "data": [
      "\u5EF6\u5B89\u4E8C\u5341\u91CC\u5821\u673A\u573A",
      "\u76D0\u57CE\u673A\u573A",
      "\u5EF6\u5409\u671D\u9633\u5DDD\u673A\u573A",
      "\u70DF\u53F0\u83B1\u5C71\u56FD\u9645\u673A\u573A",
      "\u5B9C\u5BBE\u83DC\u575D\u673A\u573A",
      "\u5B9C\u660C\u4E09\u5CE1\u673A\u573A",
      "\u4F0A\u6625\u6797\u90FD\u673A\u573A",
      "\u4F0A\u5B81\u673A\u573A",
      "\u4E49\u4E4C\u673A\u573A",
      "\u94F6\u5DDD\u6CB3\u4E1C\u673A\u573A",
      "\u6C38\u5DDE\u96F6\u9675\u673A\u573A",
      "\u6986\u6797\u6986\u9633\u673A\u573A",
      "\u7389\u6811\u5DF4\u5858\u673A\u573A",
      "\u8FD0\u57CE\u5F20\u5B5D\u673A\u573A"
    ]
  }, {
    "letter": "Z",
    "data": [
      "\u6E5B\u6C5F\u673A\u573A",
      "\u662D\u901A\u673A\u573A",
      "\u90D1\u5DDE\u65B0\u90D1\u56FD\u9645\u673A\u573A",
      "\u82B7\u6C5F\u673A\u573A",
      "\u91CD\u5E86\u6C5F\u5317\u56FD\u9645\u673A\u573A",
      "\u4E2D\u536B\u9999\u5C71\u673A\u573A",
      "\u821F\u5C71\u6731\u5BB6\u5C16\u673A\u573A",
      "\u73E0\u6D77\u4E09\u7076\u673A\u573A"
    ]
  }]
};
exports.airport = airport;
