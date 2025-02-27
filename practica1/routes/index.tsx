import { Head } from "$fresh/runtime.ts";
import Module from "../islands/Module.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Practica 1</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <div class="container">
        <Module 
          title="Módulo 1" 
          content="Sed a nisl quis erat egestas euismod ac ut erat. Sed pulvinar nunc lorem, sit amet finibus mi fermentum a. Ut dictum tellus eu sem dictum, at laoreet lacus efficitur. Fusce lobortis neque at sapien malesuada vulputate bibendum non libero. Pellentesque fermentum sodales ornare. Vivamus venenatis, metus vel aliquam congue, purus risus imperdiet lacus, et accumsan lacus dolor at nisl. Sed ut congue neque. Donec scelerisque eros at erat hendrerit dignissim. Proin nec leo laoreet, elementum turpis in, maximus sem. Etiam eu nulla ipsum. Suspendisse condimentum, est id sagittis facilisis, quam tellus placerat ligula, eu mattis ipsum odio vitae libero. Curabitur interdum nunc quam. Aliquam erat volutpat. Aliquam posuere, leo quis ultricies sollicitudin, sem odio aliquet massa, ut ultricies urna lectus eu arcu. Pellentesque tempus tincidunt blandit." 
        />
        <Module 
          title="Módulo 2" 
          content="Mauris orci purus, consectetur et ipsum sit amet, volutpat placerat diam. Duis commodo semper sapien, et finibus justo consectetur ac. Aliquam mauris ligula, interdum ac semper mollis, molestie ut justo. Donec vitae tristique elit, non placerat odio. Quisque velit dolor, iaculis quis ornare eu, efficitur in felis. In ac enim tortor. Curabitur pharetra, dui volutpat scelerisque congue, urna augue facilisis dui, ac vehicula dolor eros ut nunc. Fusce quis nisl diam. Aenean at porttitor leo, eu mollis odio. Duis cursus justo eget porttitor consequat. Nulla leo velit, iaculis et tempor sed, auctor ac dui. Mauris justo ligula, rutrum eu nibh a, fermentum viverra tortor." 
        />
        <Module 
          title="Módulo 3" 
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in leo tristique, maximus est vitae, suscipit dolor. In ultrices mauris id ornare bibendum. Nam in imperdiet risus. Donec tempor eu odio id fringilla. Donec eu sagittis sapien, ac venenatis felis. Phasellus sed lacus dapibus, gravida ante eget, auctor enim. Vivamus mattis, justo placerat consectetur porta, mauris libero semper diam, non facilisis odio metus id mauris." 
        />
      </div>
    </>
  );
}