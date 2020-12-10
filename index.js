//vlozi text do side-wrap; mozna innerHTML neni uplne nejidealnejsi volba
document.querySelector(".side-wrap").innerHTML = `<div class="article-bottom">
      <div class="img-wrap-orange">
        <div class="img"></div>
      </div>
      <div class="text-wrap">
        <h1>Reklamní jednotka</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam
          bibendum elit eget erat. Quis autem vel eum iure reprehenderit qui
          in ea voluptate velit esse quam nihil molestiae consequatur, vel
          illum qui dolorem eum fugiat quo voluptas nulla pariatur? Maecenas
          lorem.
        </p>
      </div>
    </div>`;

//pripojeni prvniho article-list > article
let articleOrangeContainer = document.querySelector(".article-list");

const articleOrangeFirst = `<div class="article orange">
<div class="img-wrap-orange">
  <div class="img"></div>
</div>
<div class="text-wrap">
  <h1>Reklamní jednotka</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam
    bibendum elit eget erat. Quis autem vel eum iure reprehenderit
    qui in ea voluptate velit esse quam nihil molestiae consequatur,
    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    Maecenas lorem.
  </p>
</div>
</div>`;
const articleOrangeFragment = document
  .createRange()
  .createContextualFragment(articleOrangeFirst);

// articleOrangeContainer.append(articleOrangeFragment); POUZE pro pripojeni na konec
let referenceNode = document.querySelector(
  "body > div.main-wrap > div.content-wrap > div > div:nth-child(3)"
);
articleOrangeContainer.insertBefore(articleOrangeFragment, referenceNode);

//-------------------------------------------------------------------------
//pripojeni druheho article-list > article
let articleOrangeContainerSecond = document.querySelector(".article-list");

const articleOrangeSecond = `<div class="article orange">
<div class="img-wrap-orange">
  <div class="img"></div>
</div>
<div class="text-wrap">
  <h1>Reklamní jednotka</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam
    bibendum elit eget erat. Quis autem vel eum iure reprehenderit
    qui in ea voluptate velit esse quam nihil molestiae consequatur,
    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    Maecenas lorem.
  </p>
</div>
</div>`;
const articleOrangeFragmentSecond = document
  .createRange()
  .createContextualFragment(articleOrangeSecond);

let referenceNodeSecond = document.querySelector(
  "body > div.main-wrap > div.content-wrap > div > div:nth-child(6)"
);
articleOrangeContainerSecond.insertBefore(
  articleOrangeFragmentSecond,
  referenceNodeSecond
);

//------------------------------------------------------------------------
//vlozi novy element do bottom-wrap, pres create ContextualFragment;
let articleBottomContainer = document.querySelector(".article-list-bottom");

const articleBottomOrange = `<div class="article-bottom">
          <div class="img-wrap-orange">
            <div class="img"></div>
          </div>
          <div class="text-wrap">
            <h1>Reklamní jednotka</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam
              bibendum elit eget erat. Quis autem vel eum iure reprehenderit qui
              in ea voluptate velit esse quam nihil molestiae consequatur, vel
              illum qui dolorem eum fugiat quo voluptas nulla pariatur? Maecenas
              lorem.
            </p>
          </div>
        </div>`;

const articleBottomFragment = document
  .createRange()
  .createContextualFragment(articleBottomOrange);

let referenceNodeArticleBottom = document.querySelector(
  "body > div.bottom-wrap > div > div:nth-child(2)"
);
articleBottomContainer.insertBefore(
  articleBottomFragment,
  referenceNodeArticleBottom
);
