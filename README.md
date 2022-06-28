# `invoice-template`
## Helper to generate invoices using LaTeX

## Dependecies

This project nneeds local LaTeX distribution installed, specifically `pdflatex` command.
Follow this [link](https://www.latex-project.org/get/) instructions to install it.

## How to use?

Simply add all needed information in a `values.js` file in the root of the project, follow the sample `values.sample.js`.

Run:

```sh
npm install
npm start
```

Your invoice should be generated in `out/invoice.pdf`.

## How it works?

It uses a [template file](./template.ejs.tex) with [EJS](https://github.com/mde/ejs) placeholders.
Ultimately, [builder.js](./builder.js) will read the template replace placeholders with what is found in [values.js](./values.sample.js)
and `pdflatex` at the very end will build the PDF file containing the invoice.

## Preview

![Invoice](https://raw.github.com/joelxr/invoice-template/main/preview.png)
