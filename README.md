# Raphael Rendered Data Drive Documents #

R2D3 is a collection of examples demonstrating using D3 and RaphaelJS together to render visualizations
compatible with all versions of Internet Explorer.

A huge thanks to Mike Bostock and Dmitry Baranovskiy for their fantastic
libraries which make cross-browser visualizations fun and easy!

D3: https://github.com/mbostock/d3
RaphaelJS: https://github.com/DmitryBaranovskiy

### Dependencies ###

In addition to RaphaelJS and D3, ECMAScript5 and query selector shims
are needed if you are using Internet Explorer. 

    <!--[if IE]>
    <script type="text/javascript" src="../sizzle.min.js"></script>
    <script type="text/javascript" src="../es5-shim.min.js"></script>
    <![endif]-->
    <script type="text/javascript" src="../raphael-min.js"></script>
    <script type="text/javascript" src="../d3.v2.min.js"></script>


### Examples ###

All of the examples are located in /examples

Note: Chrome has strict permissions for reading files out of the local file
system. Some examples use AJAX which works differently via HTTP instead of local
files. For the best experience, load the D3 examples from your own machine via
HTTP. Any static file web server will work; for example you can run Python's
built-in server:

built-in server:

    python -m SimpleHTTPServer 8888

Once this is running, go to: <http://localhost:8888/examples/>

### Future ###

As I build more examples and familiarize myself with D3, I plan on
adding Raphael plugins to support the features of D3 that can't be
patched to work on Internet Explorer or with Raphael.

At the moment, the major missing component that cannot work with Raphael
is the d3.selections APIs.
