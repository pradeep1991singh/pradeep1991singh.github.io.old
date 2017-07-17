# P e r c e n t i f y
> Pure CSS3 Percentage Circle with icons and custom content support

## Run Examples
#### Download repository

```sh
$ git clone https://github.com/pradeep1991singh/percentify.git
```

#### Run

```sh
$ cd percentify
$ yarn install
$ npm run start
```

## Usage

#### Copy/Paste `dist` folder in your project And then add css file in head tag of html file

```html
<link rel="stylesheet" href="dist/percentify.css">
```

#### Then add Percentage Circle template

```html
<!-- 	With Android Icon -->
<div class="percentify p33 cfs100 orange active">
	<span class="android-icon ifs25"></span>
	<div class="slice">
		<div class="bar"></div>
		<div class="fill"></div>
	</div>
</div>

<!-- 	With Custom text -->
<div class="percentify p80 cfs200 thinner hover active">
	<span class="text ifs50">80%</span>
	<div class="slice">
		<div class="bar"></div>
		<div class="fill"></div>
	</div>
</div>

<!-- 	Template details 

	percentify: will define percentage main element
	p33: percentage of circle need to fill i.e. 33%
	cfs100: circle size i.e. 100px, range 12px-500px
	orange: orange theme
	thinner: border size, available thin, thinner or by default normal
	hover: for hover effects
	active: make circle inner content active 
					i.e. as theme is orange it will make inner content color orange
	android-icon: android icon class name
	ifs25: icon size i.e. 25px, range 12px-500px
	text: custom text class name
-->
```

#### Percentage Counter Circle Example

```html
<script src="/dist/percentage-counter.js"></script>
<script src="/dist/scripts/percentage-counter.js"></script>
<div class="percentify p0 cfs400 green">
	<span class="text ifs100">0%</span>
	<div class="slice">
		<div class="bar"></div>
		<div class="fill"></div>
	</div>
</div>
<label for="example-android-icon" class="label label-example">
	<code>Percentage Progress Circle</code>
</label>
<script>
	window.onload = function () {
		percentify.percentageCounter({});
	};
</script>

```

## Demo

[Demo Examples](https://percentify.firebaseapp.com)
