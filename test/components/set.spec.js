import test from 'ava';
import sinon from 'sinon';
import React from 'react';
import Set from 'components/set';
import { shallow } from 'enzyme';

const setProps = {
   onClick:()=>{},
   removeSet:()=>{},
   completed:false,
   count:"5",
   dist:"25",
   interval:"1:00"
}

test('contains span and button elements', t => {
   const wrapper = shallow(
      <Set
       { ...setProps } />
   );

   // t.deepEqual(wrapper.prop('onClick'), setProps.onClick)
   // t.deepEqual(wrapper.prop('removeSet'), setProps.removeSet)
   // t.deepEqual(wrapper.prop('completed'), setProps.completed)
   // t.deepEqual(wrapper.prop('count'), setProps.count)
   // t.deepEqual(wrapper.prop('dist'), setProps.dist)
   // t.deepEqual(wrapper.prop('interval'), setProps.interval)
   t.deepEqual(wrapper.find('li').children().length, 2)
   t.truthy(wrapper.find('li').children().find('span'))
   t.truthy(wrapper.find('li').children().find('button'))
})

test('set span child contains formatted data', t => {
   const spanWrapper = shallow(
      <Set
       { ...setProps } />
   ).find('span');

   const formattedSpanText = setProps.count + " x " + setProps.dist + " @ " + setProps.interval;

   t.deepEqual(spanWrapper.render().text(), formattedSpanText)
})