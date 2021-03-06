using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SharedComponents.Service.Extension
{

    public static class IQueryableExtension
    {
        public static List<T> GetList<T>(this IQueryable<T> items)
        {
            try
            {
                return items == null || items.Count() == 0 ? new List<T>() : items.ToList();
            }
            catch
            {
                return new List<T>();
            }

        }
    }
}
