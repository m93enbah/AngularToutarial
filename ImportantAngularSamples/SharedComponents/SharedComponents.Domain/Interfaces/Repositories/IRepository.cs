using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace SharedComponents.Domain.Interfaces.Repositories
{
   public interface IRepository<IEntity> where IEntity : class
   {
       IEntity Get(long id, int companyId);
       IEntity Get(long id);
       IQueryable<IEntity> GetAll(int companyId);
       IQueryable<IEntity> GetAll();
       IQueryable<IEntity> Find(Expression<Func<IEntity, bool>> where, params Expression<Func<IEntity, object>>[] navigationProperties);
       IEntity SingleOrDefault(Expression<Func<IEntity, bool>> predicate);
       IEntity Add(IEntity entity);
       IEnumerable<IEntity> AddRange(IEnumerable<IEntity> entities);
       IEntity Remove(IEntity entity);
       IEnumerable<IEntity> RemoveRange(IEnumerable<IEntity> entities);
       IEntity Update(IEntity entity);
       IEnumerable<IEntity> AddRange(IEnumerable<IEntity> entities, Expression<Action<IEnumerable<IEntity>>> action);
       int GetSequance(string tableName);
       void SaveChanges();
   }
}   