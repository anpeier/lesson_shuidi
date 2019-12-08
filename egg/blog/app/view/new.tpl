<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://cdn.bootcss.com/twitter-bootstrap/3.4.0/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>New Blog</h1>
    <form action="/posts" method="POST" id="article-form">
        <div class="form-group">
            <label for="exampleInput">标题</label>
            <input type="text" name="title" class="form-control" id="exampleInput" placeholder="请输入标题">
        </div>
        <div class="form-group">
            <label for="contentInput">内容</label>
            <input type="text" name="title" class="form-control" id="contentInput" placeholder="请输入内容">
        </div>
        <input type="submit" class="btn btn-default" value="提交">
    </form>
</div>
</body>
</html>