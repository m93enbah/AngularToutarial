using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace TestingPro
{
    public class FastDeepCloner {
        #region Privat Properties
        //Specifies flags that control binding and the way in which the search for members and types is conducted by reflection.
        private const BindingFlags Binding = BindingFlags.Instance | BindingFlags.NonPublic | BindingFlags.Public | BindingFlags.FlattenHierarchy;
        //this field store the class type
        private readonly Type _primaryType;
        //this object that we want to copy data inside it
        private readonly object _desireObjectToBeCloned;
        #endregion

        #region Contructure
        public FastDeepCloner(object desireObjectToBeCloned)
        {
            if (desireObjectToBeCloned == null) 
                throw new Exception("The desire object to be cloned cant be NULL");
            //we store the object type we clone from
            _primaryType = desireObjectToBeCloned.GetType();
            //we store the whole object content inside the _desireObjectToBeCloned
            _desireObjectToBeCloned = desireObjectToBeCloned;

        }
        #endregion

        #region Privat Method Deep Clone
        // Clone the object Properties and its children recursively
        private object DeepClone()
        {
            if (_desireObjectToBeCloned == null)
                return null;
            //we create shallow copy if the type of the object is array
            if (_primaryType.IsArray)
                return ((Array)_desireObjectToBeCloned).Clone();

            //we store the object we want to copy as List
            object tObject = _desireObjectToBeCloned as IList;
            if (tObject != null)
            {
                //we create properities of the object 
                var properties = _primaryType.GetProperties();
                // Get the IList Type of the object (we make generic type of the given properities)
                var customList = typeof(List<>).MakeGenericType
                                 ((properties[properties.Length - 1]).PropertyType);
                //we create instance of the generic type
                tObject = (IList)Activator.CreateInstance(customList);
                //we store the generic type in the list variable and used as custom generic type for the desired Object to be cloned
                var list = (IList)tObject;
                // loop throw each object in the list and clone it
                foreach (var item in ((IList)_desireObjectToBeCloned))
                {
                    if (item == null)
                        continue;
                    var value = new FastDeepCloner(item).DeepClone();
                    list?.Add(value);
                }
            }
            else
            {
                // if the item is a string then Clone it and return it directly.
                if (_primaryType == typeof(string))
                    return (_desireObjectToBeCloned as string)?.Clone();

                // Create an empty object and ignore its construtore.
                tObject = FormatterServices.GetUninitializedObject(_primaryType);
                var fields = _desireObjectToBeCloned.GetType().GetFields(Binding);
                foreach (var property in fields)               {

                    if (property.DeclaringType.Name == "BaseModel")
                        {
                        continue;
                    }

                    if (property.IsInitOnly) // Validate if the property is a writable one.
                        continue;
                    var value = property.GetValue(_desireObjectToBeCloned);
                    if (property.FieldType.IsClass && property.FieldType != typeof(string))
                        tObject.GetType().GetField(property.Name, Binding)?.SetValue
                        (tObject, new FastDeepCloner(value).DeepClone());
                    else
                        tObject.GetType().GetField(property.Name, Binding)?.SetValue(tObject, value);
                }
            }

            return tObject;
        }

        #endregion

        #region public Method Clone
        public object Clone()
        {
            return DeepClone();
        }
        public T Clone<T>()
        {
            return (T)DeepClone();
        }
        #endregion
    }
}

