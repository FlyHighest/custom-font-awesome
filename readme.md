# custom-font-awesome

![fonts.png](https://i.loli.net/2018/04/28/5ae34a5d113bd.png)

An easy way to add new icons to font-awesome. And use them in the same way as the font-awesome icons!

Font-awesome is awesome. It provides a wonderful icon toolkit and hundreds icons. [Font-Awesome github project](https://github.com/FortAwesome/Font-Awesome)

However, we always have specific needs. There are thousands of issues asking for new icons in Font-Awesome. Here, I find an easy way to add new icons and still you can use the custom icons with label i:
```
<i class='fax fa-xxx'></i>
```

# How it works

I use [SVG with JS](https://fontawesome.com/how-to-use/svg-with-js)(you may see detailed information here). By creating a new file fa-custom.js, copied from fa-brands.js, with different variable: **icons**.  **icons** is an array in js file, containing the information of svg paths.

A python file can help you convert svg file to an array item of  **icons**.

```
python svgconvert.py --svg example.svg --name xiaomi --num 600

#svg is the path to your svg file
#name is the name you want to refer to in your html
#num is a unique number for the new icon. A number larger than 600 is recommended to avoid conflicts.

```
This program prints a string. Copy it and paste to fa-custom.js in the  **icons** array and dont forget to add a ','. And it can be used in html:

```
<i class='fac fa-xiaomi'></i>
```

Contact me if you have trouble adding your icons(tyz.xyz@qq.com). Have fun!