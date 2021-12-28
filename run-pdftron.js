import WebViewer from '@pdftron/webviewer'

WebViewer({
  path: 'dist/public/webviewer',
}, document.getElementById('viewer'))
    .then(instance => {

      const docViewer = instance.docViewer;
      /* The solution is again wrapping the problematic statements in a timeout.
       * It was an easy guess as this was also the solution for my issue 26850.
       */
      //setTimeout(() => {
      docViewer.getTool('AnnotationCreateFreeHand').setStyles({
        StrokeColor: new instance.Annotations.Color(228, 66, 52, 1),
        StrokeThickness: 2
      });
      //the next statement will fail, because AnnotationCreateFreeHand2 is not yet available.
      docViewer.getTool('AnnotationCreateFreeHand2').setStyles({
        StrokeColor: new instance.Annotations.Color(0, 0, 0, 1),
        StrokeThickness: 2
      });
      //same for AnnotationCreateFreeHand3 and AnnotationCreateFreeHand4

      /*
       * The same behavior occurs for AnnotationCreateTextHighlight (working) and AnnotationCreateTextHighlight2 (failing). I omitted it for brevity.
       */

      //closing braces for the timeout
      //  },100);

    });