var levels = [
  {
    helpTitle : "Selecione elementos pelo seu tipo",
    selectorName : "Seletor de Tipo",
    doThis : "Selecione os pratos",
    selector : "plate",
    syntax : "A",
    help : "Seleciona todos os elementos do tipo <strong>A</strong>. Tipo se refere ao tipo do elemento, então <tag>div</tag>, <tag>p</tag> e <tag>ul</tag> são todos tipos de elemento diferentes.",
    examples : [
      '<strong>div</strong> seleciona todos os elementos <tag>div</tag>.',
      '<strong>p</strong> seleciona todos os elementos <tag>p</tag>.',
    ],
    boardMarkup: `
    <plate/>
    <plate/>
    `
  },
  {
    doThis : "Selecione todos os bentos",
    selector : "bento",
    syntax : "A",
    helpTitle : "Seleciona elementos pelo seu tipo",
    selectorName : "Seletor de Tipo",
    help : "Seleciona todos os elementos do tipo <strong>A</strong>. Tipo se refere ao tipo do elemento, então <tag>div</tag>, <tag>p</tag> e <tag>ul</tag> são todos tipos de elemento diferentes.",
    examples : [
      '<strong>div</strong> seleciona todos os elementos <tag>div</tag>.',
      '<strong>p</strong> seleciona todos os elementos <tag>p</tag>.',
    ],
    boardMarkup: `
    <bento/>
    <plate/>
    <bento/>
    `
  },
  {
    doThis : "Selecione o prato chique",
    selector : "#fancy",
    selectorName: "Seletor de ID",
    helpTitle: "Seleciona elementos com um dado ID",
    syntax: "#id",
    help : 'Seleciona os elementos com um <strong>id</strong> específico. Você também pode combinar o seletor de ID com o seletor de tipo.',
    examples : [
      '<strong>#cool</strong> seleciona qualquer elemento com <strong>id="cool"</strong>',
      '<strong>ul#long</strong> seleciona <tag>ul id="long"</tag>'
    ],
    boardMarkup : `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `
  },
  {
    helpTitle: "Selecione um elemento dentro de outro elemento",
    selectorName : "Seletor de Descendente",
    doThis : "Selecione a maçã que está no prato",
    selector : "plate apple",
    syntax: "A&nbsp;&nbsp;B",
    help : "Seleciona todos os <strong>B</strong> dentro de <strong>A</strong>. <strong>B</strong> é chamado de descendente porque ele está dentro de outro elemento.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> seleciona todos os elementos <tag>strong</tag> que estejam dentro de qualquer <tag>p</tag>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> seleciona todos os elementos <tag>span</tag> que estejam dentrok de um elemento com <strong>id="fancy"</strong>',
    ],
    boardMarkup : `
    <bento/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `
  },
  {
    doThis : "Selecione o picles dentro do prato chique",
    selector : "#fancy pickle",
    helpTitle: "Combine o seletor de descendente e o seletor de ID",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Você pode combinar qualquer seletor com o seletor de descendente.',
    examples : [
      '<strong>#cool&nbsp;span</strong> seleciona todos os elementos <tag>span</tag> que estejam dentro de elementos com <strong>id="cool"</strong>'
    ],
    boardMarkup : `
    <bento>
    <orange/>
    </bento>
    <plate id="fancy">
      <pickle/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    `
  },
  {
    doThis : "Selecione as maçãs pequenas",
    selector : ".small",
    selectorName: "Seletor de Classe",
    helpTitle: "Seleciona elementos por sua classe",
    syntax: ".nomeDeClasse",
    help : 'O seletor de classe seleciona todos os elementos com que tenham aquela palavra no seu atributo <strong>class</strong>. Elementos só podem ter um ID, mas podem ter várias classes.',
    examples : [
    '<strong>.neato</strong> seleciona todos os elementos com <strong>class="neato"</strong>'
    ],
    boardMarkup : `
    <apple/>
    <apple class="small"/>
    <plate>
      <apple class="small"/>
    </plate>
    <plate/>
    `
  },
  {
    doThis : "Selecione as laranjas pequenas",
    selector : "orange.small",
    helpTitle: "Combine o seletor de classe",
    syntax: "A.nomeDeClasse",
    help : 'Você pode combinar o seletor de classe com outros seletores, como o seletor de tipo.',
    examples : [
      '<strong>ul.importante</strong> seleciona todos os elementos <tag>ul</tag> que tenham <strong>class="importante"</strong>',
      '<strong>#grande.largo</strong> seleciona todos os elementos com <strong>id="grande"</strong> que também tenham <strong>class="largo"</strong>'
    ],
    boardMarkup :`
    <apple/>
    <apple class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <plate>
      <orange/>
    </plate>
    <plate>
      <orange class="small"/>
    </plate>`
  },
  {
    doThis : "Selecione as laranjas pequenas dentro de bentos",
    selector : "bento orange.small",
    syntax: "👀",
    helpTitle: "Você consegue...",
    help : 'Combine o que aprendeu nos últimos níveis pra resolver esse!',
    boardMarkup : `
    <bento>
      <orange/>
    </bento>
    <orange class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <bento>
      <apple class="small"/>
    </bento>
    <bento>
      <orange class="small"/>
    </bento>
    `
  },
  {
    doThis : "Selecione todos os pratos e bentos",
    selector : "plate,bento",
    selectorName : "Combinador de vírgula",
    helpTitle: "Combine, seletores, com... vírgulas!",
    syntax : "A, B",
    help : 'Isso seleciona todos os elementos <strong>A</strong> e <strong>B</strong>. Você pode combinar quaisquer seletores dessa forma, e pode especificar mais do que dois.',
    examples: [
    '<strong>p, .divertido</strong> seleciona todos os elementos <tag>p</tag>, assim como todos os elementos com <strong>class="divertido"</strong>',
    '<strong>a, p, div</strong> seleciona todos os elementos <tag>a</tag>, <tag>p</tag> e <tag>div</tag>'
    ],
    boardMarkup : `
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <bento>
      <pickle/>
    </bento>
    <plate>
      <pickle/>
    </plate>
    <pickle/>
    <pickle class="small"/>
    `
  },
  {
    doThis : "Selecione tudo!",
    selector : "*",
    selectorName:  "O Seletor Universal",
    helpTitle: "Você pode selecionar tudo!",
    syntax : "*",
    help : 'Você pode selecionar todos os elementos com o seletor universal! ',
    examples : [
      '<strong>p *</strong> seleciona qualquer elemento dentro de qualquer elemento <tag>p</tag>.',
    ],
    boardMarkup : `
    <apple/>
    <plate>
      <orange class="small" />
    </plate>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <plate id="fancy"/>
    `
  },
  {
    doThis : "Selecione tudo que esteja dentro de um prato",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combine o Seletor Universal",
    help : 'Isso seleciona todos os elementos dentro de <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> seleciona qualquer elemento dentro de qualquer elemento <tag>p</tag>.',
      '<strong>p *</strong> seleciona qualquer elemento dentro de qualquer elemento <tag>ul class="fancy"</tag>.',
    ],
    boardMarkup: `
    <plate id="fancy">
      <orange class="small"/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    <apple class="small"/>
    <plate>
      <apple/>
    </plate>`
  },
  // {
  //   doThis : "Select every apple that's next to a plate",
  //   selector : "plate + apple",
  //   helpTitle: "Select an element that directly follows another element",
  //   selectorName: "Adjacent Sibling Selector",
  //   syntax : "A + B",
  //   help : "This selects all <strong>B</strong> elements that directly follow <strong>A</strong>. Elements that follow one another are called siblings. They're on the same level, or depth. <br/><br/>In the HTML markup for this level, elements that have the same indentation are siblings.",
  //   examples : [
  //     '<strong>p + .intro</strong> selects every element with <strong>class="intro"</strong> that directly follows a <tag>p</tag>',
  //     '<strong>div + a</strong> selects every <tag>a</tag> element that directly follows a <tag>div</tag>'
  //   ],
  //   boardMarkup : `
  //   <bento>
  //     <apple class="small"/>
  //   </bento>
  //   <plate />
  //   <apple class="small"/>
  //   <plate />
  //   <apple/>
  //   <apple class="small"/>
  //   <apple class="small"/>
  //   `
  // },
  // {
  //   selectorName: "General Sibling Selector",
  //   helpTitle: "Select elements that follows another element",
  //   syntax: "A ~ B",
  //   doThis : "Select the pickles beside the bento",
  //   selector : "bento ~ pickle",
  //   help : "You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.",
  //   examples : [
  //     '<strong>A ~ B</strong> selects all <strong>B</strong> that follow a <strong>A</strong>'
  //   ],
  //   boardMarkup : `
  //   <pickle/>
  //   <bento>
  //     <orange class="small"/>
  //   </bento>
  //   <pickle class="small"/>
  //   <pickle/>
  //   <plate>
  //     <pickle/>
  //   </plate>
  //   <plate>
  //     <pickle class="small"/>
  //   </plate>
  //   `
  // },
  {
    selectorName: "Seletor de Filho",
    syntax: "A > B&nbsp;",
    doThis : "Selecione a maçã diretamente dentro de um prato",
    selector : "plate > apple",
    helpTitle: "Seleciona filhos diretos de um elemento",
    help : "Você pode selecionar elementos que são filhos diretos de outros elementos. Um elemento filho é qualquer elemento que esteja diretamente dentro de outro elemento. <br><br>Elementos que estejam dentro de filhos de um elemento são chamados de elementos descendentes.",
    examples : [
      '<strong>A > B</strong> seleciona todos os elementos <strong>B</strong> que sejam filhos diretos de <strong>A</strong>'
    ],
    boardMarkup: `
    <plate>
      <bento>
        <apple/>
      </bento>
    </plate>
    <plate>
      <apple/>
    </plate>
    <plate/>
    <apple/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "Pseudo-seletor de Primeiro Filho",
    helpTitle: "Seleciona o primeiro elemento dentro de outro elemento",
    doThis : "Selecione a primeira laranja",
    selector : "plate :first-child",
    syntax: ":first-child",

    help : "Você pode selecionar o primeiro filho de outro elemento. Um elemento filho é qualquer elemento que esteja diretamente dentro de outro elemento. Você pode combinar esse pseudo-seletor com outros seletores.",
    examples : [
      '<strong>:first-child</strong> seleciona todos os elementos que são os primeiros filhos de seus pais.',
      '<strong>p:first-child</strong> seleciona todos os elementos <tag>p</tag> que são primeiros filhos.',
      '<strong>div p:first-child</strong> seleciona todos os elementos <tag>p</tag> que são primeiros filhos de uma <tag>div</tag>.'
    ],
    boardMarkup :`
    <bento/>
    <plate />
    <plate>
      <orange />
      <orange />
      <orange />
    </plate>
    <pickle class="small" />
    `
  },
  // {
  //   selectorName: "Only Child Pseudo-selector",
  //   helpTitle: "Select an element that are the only element inside of another one.",
  //   doThis : "Select the apple and the pickle on the plates",
  //   selector : "plate :only-child",
  //   syntax: ":only-child",
  //   help : "You can select any element that is the only element inside of another one.",
  //   examples : [
  //     '<strong>span:only-child</strong> selects the <tag>span</tag> elements that are the only child of some other element.',
  //     '<strong>ul li:only-child</strong> selects the only <tag>li</tag> element that are in a <tag>ul</tag>.'
  //   ],
  //   boardMarkup : `
  //   <plate>
  //     <apple/>
  //   </plate>
  //   <plate>
  //     <pickle />
  //   </plate>
  //   <bento>
  //     <pickle />
  //   </bento>
  //   <plate>
  //     <orange class="small"/>
  //     <orange/>
  //   </plate>
  //   <pickle class="small"/>
  //   `
  // },
  {
    selectorName: "Pseudo-seletor de Último Filho",
    helpTitle: "Seleciona o último elemento dentro de outro elemento",
    doThis : "Selecione a maçã e o picles pequenos",
    selector : ".small:last-child",
    syntax: ":last-child",
    help : "Você pode usar esse seletor para selecionar um elemento que seja o último filho de seu pai. <br><br>Dica &rarr; Em casos onde só tem um elemento, esse elemento conta como first-child e last-child!",
    examples : [
      '<strong>:last-child</strong> seleciona todos os elementos que são últimos filhos de seus pais.',
      '<strong>span:last-child</strong> seleciona todos os elementos <tag>span</tag> que são últimos filhos de seus pais.',
      '<strong>ul li:last-child</strong> seleciona os elementos <tag>li</tag> que são os últimos filhos de um <tag>ul</tag>.'
    ],
    boardMarkup : `
    <plate id="fancy">
      <apple class="small"/>
    </plate>
    <plate/>
    <plate>
      <orange class="small"/>
      <orange>
    </plate>
    <pickle class="small"/>`
  },
  {
    selectorName: "Pseudo-seletor de N-ésimo filho",
    helpTitle: "Seleciona um elemento por sua ordem em outro elemento",
    doThis : "Selecione o terceiro prato",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",
    help : "Seleciona o <strong>N-ésimo</strong> (ex: 1º, 3º, 12º, etc) elemento filho em outro elemento.",
    examples : [
      '<strong>:nth-child(8)</strong> seleciona todo elemento que é o 8º filho de seu pai.',
      '<strong>div p:nth-child(2)</strong> seleciona o segundo elemento em toda <strong>div</strong>, se ele for <strong>p</strong>',
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    `
  },
  // {
  //   selectorName: "Nth Last Child Selector",
  //   helpTitle: "Select an element by its order in another element, counting from the back",
  //   doThis : "Select the 1st bento",
  //   selector : "bento:nth-last-child(3)",
  //   syntax: ":nth-last-child(A)",
  //   help : "Selects the children from the bottom of the parent. This is like nth-child, but counting from the back!",
  //   examples : [
  //     '<strong>:nth-last-child(2)</strong> selects all second-to-last child elements.'
  //   ],
  //   boardMarkup: `
  //   <plate/>
  //   <bento/>
  //   <plate>
  //     <orange/>
  //     <orange/>
  //     <orange/>
  //   </plate>
  //   <bento/>
  //   `
  // },
  // {
  //   selectorName: "First of Seletor de Tipo",
  //   helpTitle: "Select the first element of a specific type",
  //   doThis : "Select first apple",
  //   selector : "apple:first-of-type",
  //   syntax: ":first-of-type",
  //   help : "Selects the first element of that type within another element.",
  //   examples : [
  //     '<strong>span:first-of-type</strong> selects the first <tag>span</tag> in any element.'
  //   ],
  //   boardMarkup: `
  //   <orange class="small"/>
  //   <apple/>
  //   <apple class="small"/>
  //   <apple/>
  //   <apple class="small"/>
  //   <plate>
  //     <orange class="small"/>
  //     <orange/>
  //   </plate>
  //   `
  // },
  // {
  //   selectorName: "Nth of Seletor de Tipo",
  //   doThis: "Select all even plates",
  //   selector: "plate:nth-of-type(even)",
  //   syntax: ":nth-of-type(A)",
  //   help: "Selects a specific element based on its type and order in another element - or even or odd instances of that element.",
  //   examples: [
  //     '<strong>div:nth-of-type(2)</strong> selects the second instance of a div.',
  //     '<strong>.example:nth-of-type(odd)</strong> selects all odd instances of a the example class.'
  //   ],
  //   boardMarkup : `
  //   <plate/>
  //   <plate/>
  //   <plate/>
  //   <plate/>
  //   <plate id="fancy"/>
  //   <plate/>
  //   `
  // },
  // {
  //   selectorName: "Nth-of-Seletor de Tipo with Formula",
  //   doThis: "Select every 2nd plate, starting from the 3rd",
  //   selector: "plate:nth-of-type(2n+3)",
  //   syntax: ":nth-of-type(An+B)",
  //   help: "The nth-of-type formula selects every nth element, starting the count at a specific instance of that element.",
  //   examples: [
  //     '<strong>span:nth-of-type(6n+2)</strong> selects every 6th instance of a <tag>span</tag>, starting from (and including) the second instance.'
  //   ],
  //   boardMarkup : `
  //   <plate/>
  //   <plate>
  //     <pickle class="small" />
  //   </plate>
  //   <plate>
  //     <apple class="small" />
  //   </plate>
  //   <plate/>
  //   <plate>
  //     <apple />
  //   </plate>
  //   <plate/>
  //   `
  // },
  // {
  //   selectorName: "Only of Seletor de Tipo",
  //   helpTitle: "Select elements that are the only ones of their type within their parent element",
  //   selector : "apple:only-of-type",
  //   syntax: ":only-of-type",
  //   doThis : "Select the apple on the middle plate",
  //   help : "Selects the only element of its type within another element.",
  //   examples : [
  //     '<strong>p span:only-of-type</strong> selects a <tag>span</tag> within any <tag>p</tag> if it is the only <tag>span</tag> in there.'
  //   ],
  //   boardMarkup: `
  //   <plate id="fancy">
  //     <apple class="small" />
  //     <apple />
  //   </plate>
  //   <plate>
  //     <apple class="small" />
  //   </plate>
  //   <plate>
  //     <pickle />
  //   </plate>
  //   `
  // },
  // {
  //   selectorName: "Last of Seletor de Tipo",
  //   helpTitle: "Select the last element of a specific type",
  //   doThis : "Select the last apple and orange",
  //   selector : ".small:last-of-type",
  //   syntax: ":last-of-type",
  //   help : "Selects each last element of that type within another element. Remember type refers the kind of tag, so <tag>p</tag> and <tag>span</tag> are different types. <br><br> I wonder if this is how the last dinosaur was selected before it went extinct.",
  //   examples : [
  //     '<strong>div:last-of-type</strong> selects the last <tag>div</tag> in every element.',
  //     '<strong>p span:last-of-type</strong> selects the last <tag>span</tag> in every <tag>p</tag>.'
  //   ],
  //   boardMarkup : `
  //   <orange class="small"/>
  //   <orange class="small" />
  //   <pickle />
  //   <pickle />
  //   <apple class="small" />
  //   <apple class="small" />
  //   `
  // },
  // {
  //   selectorName: "Empty Selector",
  //   helpTitle: "Select elements that don't have children",
  //   doThis : "Select the empty bentos",
  //   selector : "bento:empty",
  //   syntax: ":empty",
  //   help : "Selects elements that don't have any other elements inside of them.",
  //   examples : [
  //     '<strong>div:empty</strong> selects all empty <tag>div</tag> elements.'
  //   ],
  //   boardMarkup:`
  //   <bento/>
  //   <bento>
  //     <pickle class="small"/>
  //   </bento>
  //   <plate/>
  //   <bento/>`
  // },
  // {
  //   selectorName: "Negation Pseudo-class",
  //   helpTitle: "Select all elements that don't match the negation selector",
  //   doThis : "Select the big apples",
  //   selector : "apple:not(.small)",
  //   syntax: ":not(X)",
  //   help : 'You can use this to select all elements that do not match selector <strong>"X"</strong>.',
  //   examples : [
  //     '<strong>:not(#fancy)</strong> selects all elements that do not have <strong>id="fancy"</strong>.',
  //     '<strong>div:not(:first-child)</strong> selects every <tag>div</tag> that is not a first child.',
  //     '<strong>:not(.big, .medium)</strong> selects all elements that do not have <strong>class="big"</strong> or <strong>class="medium"</strong>.'
  //   ],
  //   boardMarkup: `
  //   <plate id="fancy">
  //     <apple class="small" />
  //   </plate>
  //   <plate>
  //     <apple />
  //   </plate>
  //   <apple />
  //   <plate>
  //     <orange class="small" />
  //   </plate>
  //   <pickle class="small" />
  //   `
  // },
  // {
  //   selectorName: "Attribute Selector",
  //   helpTitle: "Select all elements that have a specific attribute",
  //   doThis : "Select the items for someone",
  //   selector : "[for]",
  //   syntax: "[attribute]",
  //   help : 'Attributes appear inside the opening tag of an element, like this: <tag>span attribute="value"</tag>. An attribute does not always have a value, it can be blank!',
  //   examples : [
  //     '<strong>a[href]</strong> selects all <tag>a</tag> elements that have a <strong>href="anything"</strong> attribute.',
  //     '<strong>[type]</strong> selects all elements that have a <strong>type="anything"</strong>. attribute'
  //   ],
  //   boardMarkup:`
  //   <bento><apple class="small"/></bento>
  //   <apple for="Ethan"/>
  //   <plate for="Alice"><pickle/></plate>
  //   <bento for="Clara"><orange/></bento>
  //   <pickle/>`
  // },
  // {
  //   selectorName: "Attribute Selector",
  //   helpTitle: "Select all elements that have a specific attribute",
  //   doThis : "Select the plates for someone",
  //   selector : "plate[for]",
  //   syntax: "A[attribute]",
  //   help : "Combine the attribute selector with another selector (like the tag name selector) by adding it to the end.",
  //   examples : [
  //     '<strong>[value]</strong> selects all elements that have a <strong>value="anything"</strong> attribute.',
  //     '<strong>a[href]</strong> selects all <tag>a</tag> elements that have a <strong>href="anything"</strong> attribute.',
  //     '<strong>input[disabled]</strong> selects all <tag>input</tag> elements with the <strong>disabled</strong> attribute'
  //   ],
  //   boardMarkup:`
  //   <plate for="Sarah"><pickle/></plate>
  //   <plate for="Luke"><apple/></plate>
  //   <plate/>
  //   <bento for="Steve"><orange/></bento>
  //   `
  // },
  // {
  //   selectorName: "Attribute Value Selector",
  //   helpTitle: "Select all elements that have a specific attribute value",
  //   doThis : "Select Vitaly's meal",
  //   selector : "[for=Vitaly]",
  //   syntax: '[attribute="value"]',
  //   help : "Attribute selectors are case sensitive, each character must match exactly.",
  //   examples : [
  //     '<strong>input[type="checkbox"]</strong> selects all checkbox input elements.'
  //   ],
  //   boardMarkup:`
  //   <apple for="Alexei" />
  //   <bento for="Albina"><apple /></bento>
  //   <bento for="Vitaly"><orange/></bento>
  //   <pickle/>
  //   `
  // },
  // {
  //   selectorName: "Attribute Starts With Selector",
  //   helpTitle: "Select all elements with an attribute value that starts with specific characters",
  //   doThis : "Select the items for names that start with 'Sa'",
  //   selector : '[for^="Sa"]',
  //   syntax: '[attribute^="value"]',
  //   // help : "You can use quotes around the value in the selector, or not&mdash;it's optional!",
  //   examples : [
  //     '<strong>.toy[category^="Swim"]</strong> selects elements with class <strong>toy</strong> and either <strong>category="Swimwear"</strong> or <strong>category="Swimming"</strong>.'
  //   ],
  //   boardMarkup: `
  //   <plate for="Sam"><pickle/></plate>
  //   <bento for="Sarah"><apple class="small"/></bento>
  //   <bento for="Mary"><orange/></bento>
  //   `
  // },
  // {
  //   selectorName: "Attribute Ends With Selector",
  //   helpTitle: "Select all elements with an attribute value that ends with specific characters",
  //   doThis : "Select the items for names that end with 'ato'",
  //   selector : '[for$="ato"]',
  //   syntax: '[attribute$="value"]',
  //   help : '',
  //   examples : [
  //     '<strong>img[src$=".jpg"]</strong> selects all images display a <strong>.jpg</strong> image.',
  //   ],
  //   boardMarkup:`
  //   <apple class="small"/>
  //   <bento for="Hayato"><pickle/></bento>
  //   <apple for="Ryota"></apple>
  //   <plate for="Minato"><orange/></plate>
  //   <pickle class="small"/>
  //   `
  // },
  // {
  //   selectorName: "Attribute Wildcard Selector",
  //   helpTitle: "Select all elements with an attribute value that contains specific characters anywhere",
  //   syntax: '[attribute*="value"]',
  //   doThis : "Select the meals for names that contain 'obb'",
  //   selector : '[for*="obb"]',
  //   help : 'A useful selector if you can identify a common pattern in things like <strong>class</strong>, <strong>href</strong> or <strong>src</strong> attributes.',
  //   examples : [
  //     '<strong>img[src*="/thumbnails/"]</strong> selects all image elements that show images from the "thumbnails" folder.',
  //     '<strong>[class*="heading"]</strong> selects all elements with "heading" in their class, like <strong>class="main-heading"</strong> and <strong>class="sub-heading"</strong>'
  //   ],
  //   boardMarkup:`
  //   <bento for="Robbie"><apple /></bento>
  //   <bento for="Timmy"><pickle /></bento>
  //   <bento for="Bobby"><orange /></bento>
  //   `
  // }
];
