using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Service.Extension
{
    public static class ObjectExtension
    {
        public static Object GetPropertyValue(this object obj, string propertyName) => obj.GetType().GetProperty(propertyName).GetValue(obj);
    }
}