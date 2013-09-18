# grunt-megumi-underscores

> Create a WordPress theme based on [Underscores][] with [grunt-init][].

[underscores]: https://github.com/automattic/_s
[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation
もし、[grunt-init][] をインストールしてなければ先にインストールしてください。

[grunt-init][] のインストールが完了したら、`~/.grunt-init/` ディレクトリを作成してください。

```
mkdir ~/.grunt-init
```

次は、以下のコマンドを実行して、このテンプレートをインストールしてください。

```
git clone git@github.com:miya0001/grunt-megumi-underscores.git ~/.grunt-init/megumi-underscores
```

インストールは以上で完了です。

テンプレートを最新版に更新するには以下のコマンドを実行しましょう。

```
cd ~/.grunt-init/megumi-underscores
git pull
```

## 使い方

`wp-content/themes` ディレクトリに移動して任意のディレクトリを作成し、以下のコマンドを実行してください。

```
grunt-init megumi-underscores
```

以上を実行すると、テーマ名などの入力を求められた後、テーマファイルが作成されます。

テーマファイルの作成が完了したら、以下のコマンドを実行してください。これによりCompassなどのツールのセットアップが完了します。

```
npm install
```

あとは、`sass/your-theme-name.scss` や `js/your-theme-name.js` などを編集して、必要に応じて以下のコマンドを実行して、.scss などのコンパイルを実行してください。

```
grunt
```

以降は、`grunt` と実行するだけで、.scss のコンパイルや、JavaScriptのminifyを行います。

また、これらのファイルは、WordPressによってあらかじめロードされています。


## Notes

 * Compassの設定ファイル config.rb は不要です。
 * Underscoresに対して、フックの追加、CSSの削除等の修正を加えてあります。

## Release History

 * 2013-09-19 First Release
