### Conceptual Exercise

Answer the following questions below:

##What is RESTful routing?
A RESTful route is a route that provides mapping between HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of relying solely on the URL to indicate what site to visit, a RESTful route also depends on the HTTP verb and the URL.


##What is a resource?
data,html,picture and etc, any route returns the data.
If it similar to an object in an OOP language. A resource is an object with a type, associated data, and a relationship to other resources. The standard methods on the resource are the HTTP verbs.


##When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
When creating an API you are not returning the HTML for the form. You are simply taking in the data provided by the front end, making the user, and then sending back JSON. It is the job of the front end to do send the right data however it pleases (through a form generated on the front end, ajax, etc.).

##What does idempotent mean? Which HTTP verbs are idempotent?

Idempotency means that multiple identical requests will have the same outcome. So it does not matter if a request is sent once or multiple times. The following HTTP methods are idempotent: GET, HEAD, OPTIONS, TRACE, PUT and DELETE. All safe HTTP methods are idempotent but PUT and DELETE are idempotent but not safe.

##What is the difference between PUT and PATCH?

The main difference between the PUT and PATCH method is that the PUT method uses the request URI to supply a modified version of the requested resource which replaces the original version of the resource, whereas the PATCH method supplies a set of instructions to modify the resource.

##What is one way encryption?
a one-way hash function is designed in such a way that it is hard to reverse the process, that is, to find a string that hashes to a given value (hence the name one-way.) A good hash function also makes it hard to find two strings that would produce the same hash value.

##What is the purpose of a `salt` when hashing a password?
In cryptography, a salt is random data that is used as an additional input to a one-way function that hashes data, a password or passphrase. Salts are used to safeguard passwords in storage.

##What is the purpose of the Bcrypt module?

Python bcrypt module is a library for generating strong hashing values in Python. It is installed with pip install bcrypt command.


##What is the difference between authorization and authentication?
Authentication and authorization might sound similar, but they are distinct security processes in the world of identity and access management (IAM). Authentication confirms that users are who they say they are. Authorization gives those users permission to access a resource.
