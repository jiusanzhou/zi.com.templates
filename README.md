# 文章模板



**本数据来源 *zi.com* 的数据接口，所有权归zi.com及其作者所有，如有侵权联系删除！**



## 初衷

作为处女座，一直想有一套精美又简易的写作工具套件，包含以下几个部分：

1. 编辑器，Write Here Post Any Where
2. UI样式，Beautiful and Tiny
3. 评论体系，Comment with any app



无独有偶, *zi.com*  作为我最喜爱的一个创作平台，其优美的模板模式深受我的喜爱，唯一有点小遗憾的是，从平台的受众出发，是不支持`Markdown`编辑格式，让我这种`INTJ`心生羁绊，总觉得有些小遗憾。

这里我取其精华，将模板存档，以便于日后的工具打造，当然需要勉励的是：Do it as soon as possible!



## 说明

模板接口 `https://app.zi.com/zi/template/get`.

在 `curl` 请求示例：

```bash
curl -X POST https://app.zi.com/zi/template/get -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36' -H 'content-type: application/json' --data-binary '{"pageNum":0,"pageSize":30,"device":"web"}'
```

响应结果如下图所示，`row`的内容省略下面单独说明：

```json
{
  "code": 0,
  "desc": "ok",
  "data": {
    "pageNum": 0,
    "pageSize": 30,
    "total": 13,
    "totalPage": 1,
    "rows": []
  }
}
```

`row`里面的内容用于描述模板，内容如下，为了说明的方便我使用`YAML`来描述：

```yaml
content: # 示例文章内容
	"..."
css: # 模板的CSS
	"..."
designer: Ray
fonts:
- compressorUrl: "https://font.zi.com/webfont/STFangsong.zip"
  fontId: "8fc6152b-ad4a-4fc9-af49-99e6622d1ff4"
  fontVersion: "0"
  name: "STFangsong"
  size: 7669181
isPrivate: 0
mediumThumbnail: "https://data.zi.com/app/img/template/t6.png"
name: "UNTITLED"
size: 185382
staticDomain: "https://zi.com/w"
templateId: "ceb88295-7a27-4057-84c1-f751cb9ed554"
templateZip: "https://data.zi.com/app/template/template06.zip"
thumbnail: "https://zi.com/w/images/template06.png"
url: "https://zi.com/w/ceb88295-7a27-4057-84c1-f751cb9ed554.html?version=25"
version: 25
```



## 过程

## 结果

[templates](./json/templates.json) 中是截至`2018-05-16 07:30`接口的返回内容。

对 *zi.com* 接口的处理，除了获取到了模板数据外，对此类后台的接口设计有所观摩。

**TODO**