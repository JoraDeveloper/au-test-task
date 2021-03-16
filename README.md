# au-test-task
## Тестовое задание для au.ru
ТЗ тестового задания: https://drive.google.com/file/d/18GjJJJlw7YoshQfq2_FYQv6hnRTpjLp2/view
Демо: https://hidden-retreat-02730.herokuapp.com/

## Инструкция по запуску:
```sh
npm install 
npm run server
```

## Используемые технологии:
- HTML, SCSS, JS
- React, Redux
- Webpack

## Зависимости:
Использовал стороннюю библиотеку [react-hook-forms](https://react-hook-form.com/) (было интересно поработать с готовым решением для валидации форм).
## Краткое описание:
Необходимо реализовать одностраничное приложение с несколькими формами, добавить валидацию форм, сымитировать отправку, путём вывода собранных данных (в моей реализации при успешной отправке появится всплывающий pop-up в правом нижнем углу).

Одним из требований к заданию является реализация переиспользуемых компонентов, ниже представлена небольшая документация для работы с готовыми компонентами.

## Документация готовых компонентов:
Компоненты предполгают передачу в них данных и параметров для отображения. Валидацию, обработку событий и данных следует вынести в родительский компонент.

Компоненты форм:
- [InputTextForm](#inputtextform)
- [SelectRow](#selectrow)
- [CheckboxForm](#checkboxform)

Компоненты групп форм:
- [FormRow](#formrow)

## InpuTextForm
<a id='inputtextform'></a>
Создание компонента:
```JavaScript
<InputTextForm 
    errors="Укажите пароль"
    ref={ref}
    className='input-text-form'
    name='input-password'
/>
```
Параметры:
| Name | Type | Description |
| ------ | ------ | ----- |
| errors | string | Строка, содержащая сообщение об ошибке
| ref |  RefObject<T> | Ref будет установлен в поле input
Также можно добавлять любые параметры, доступные для тега <b>input</b> [MDN input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

## SelectRow
<a id='selectrow'></a>
Создание компонента:
```JavaScript
const myOption = {
    value: 'Желтый',
    attributes: {
        className: 'yellow-option'
    }
}
        
<SelectRow
    options={[myOption]}
    ref={register}
/>
```
Параметры:
| Name | Type | Description |
| ------ | ------ | ----- |
| options | any[] | Массив, содержащий свойства тегов option
| ref |  RefObject<T> | Ref будет установлен в поле select
Также можно добавлять любые параметры, доступные для тега <b>select</b> [MDN select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)

Поля объекта option:
| Name | Type | Description |
| ------ | ------ | ----- |
| value | string | Значение, которое увидит пользователь при выпадании тега
| attributes |  any | Объект, содержащий атрибуты, доступные тегу option
Пример:
```JavaScript
const myOption = {
    value:'Желтый',
    attributes: {
        className: 'yellow-option',
        value: 'yellow'
    }
}
```
```HTML
<option className='yellow-option' value='yellow'>Желтый</option>
```

## CheckboxForm
Создание компонента:
<a id='checkboxform'></a>
```JavaScript
<CheckboxForm 
    name='checkbox'
    text='Согласен'
/>
```
Параметры:
| Name | Type | Description |
| ------ | ------ | ----- |
| text | string | Строка, содержащая описание
| ref |  RefObject<T> | Ref будет установлен в поле input
Также можно добавлять любые параметры, доступные для тега <b>input</b> [MDN input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

## FormRow
<a id='formrow'></a>

Создание компонента:
```JavaScript
<FormRow label='My label' description='My description' id='select'>
    <SelectRow
        id='select'
        options={[]}
    />
</FormRow>
```
Параметры:
| Name | Type | Description |
| ------ | ------ | ----- |
| label | string | Содержимое тега label
| description |  string | Содержимое описания элемента FormRow
| id |  string | id элемента формы, передоваемой в качестве children. Нужен для связи тега label с формой
| children |  any | Передается внутрь закрывающих тегов компонента. Добавляет переданный код в центральную часть компонента.