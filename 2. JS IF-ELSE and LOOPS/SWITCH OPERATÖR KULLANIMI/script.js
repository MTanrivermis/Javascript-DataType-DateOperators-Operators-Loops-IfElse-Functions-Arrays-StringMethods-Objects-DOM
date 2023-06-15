const not = 'AA';

switch(not)
{
        case'AA': //string yerine number değeri verirsem default basar.
        console.log('En başarılı sensin.');
        break;  // Bir koşulu girdikten sonra "break" keywordünü kullanıp diğerlerine girmesini engellmek lazım.
        case'BA':
        console.log('Süper not.');
        break;
        case'AA':
        console.log('En başarılı sensin.');
        break;
        case'BB':
        console.log('Güzel Not.');
        break;
        case'CB':
        console.log('İdare eder.');
        break;
        case'CC':
        console.log('Dersi geçtiniz.');
        break;
        default:
        console.log('Dersten kaldınız.');
}






// if(not === 'AA'){

// }else if (not === 'BA'){

// }else if (not === 'BB'){

// }else if (not === 'CB'){

// }else if (not === 'CC'){

// }else if{

// }
