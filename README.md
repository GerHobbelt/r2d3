R2D3 packages the browser compatibility of Raphael with the extensive
visualization features of D3. This combination provides a powerful toolkit that is
compatible in modern browsers as well as ALL versions of Internet Explorer.

### Examples

Note: Chrome has strict permissions for reading files out of the local file
system. Some examples use AJAX which works differently via HTTP instead of local
files. For the best experience, load the D3 examples from your own machine via
HTTP. Any static file web server will work; for example you can run Python's
built-in server:

built-in server:

    python -m SimpleHTTPServer 8888

Once this is running, go to: <http://localhost:8888/examples/>

### Development Setup

This repository should work out of the box if you just want to create new
visualizations using Raphael and D3. On the other hand, if you want to extend R2D3 with new
features, fix bugs, or run tests, you'll need to install a few more things.

    brew install node
    brew install npm

Next, from the root directory of this repository, install D3's dependencies:

    make install

You can see the list of dependencies in package.json. NPM will install the
packages in the node_modules directory.
    
