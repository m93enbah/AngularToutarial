using DOMAIN.Context;
using Microsoft.EntityFrameworkCore;
using SharedComponents.Domain.Common;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Interfaces.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace SharedComponents.Repository.Common
{
    public class Repository<IEntity> : IRepository<IEntity> where IEntity : BaseModel, new()
    {
        protected SharedComponentsDBContext Context;
        public Repository(SharedComponentsDBContext context)
        {
            this.Context = context;
        }

        public virtual IEntity Get(long Id, int companyId)
        {
            var result = Context.Set<IEntity>().AsNoTracking().Where(entity => entity.Id == Id).FirstOrDefault();

            if (result != null)
                if (new IEntity() is ICloudEntity && (result as ICloudEntity).CompanyId != companyId)
                    result = null;

            return result;
        }
        public virtual IEntity Get(long Id)
        {
            var result = Context.Set<IEntity>().AsNoTracking().Where(entity => entity.Id == Id).FirstOrDefault();
            return result;
        }

        public IQueryable<IEntity> GetAll(int companyId)
        {
            IQueryable<IEntity> dbQuery = Context.Set<IEntity>();

            if ((new IEntity()) is ICloudEntity)
                dbQuery = dbQuery.Where(e => ((ICloudEntity)e).CompanyId == companyId);

            return dbQuery.AsNoTracking();
        }

        public IQueryable<IEntity> GetAll()
        {
            IQueryable<IEntity> dbQuery = Context.Set<IEntity>();
            return dbQuery.AsNoTracking();
        }


        public IQueryable<IEntity> Find(Expression<Func<IEntity, bool>> predicate, params Expression<Func<IEntity, object>>[] navigationProperties)
        {
            IQueryable<IEntity> dbQuery = Context.Set<IEntity>();

            foreach (Expression<Func<IEntity, object>> navigationProperty in navigationProperties)
                dbQuery = dbQuery.AsNoTracking().Include<IEntity, object>(navigationProperty);

            return dbQuery.Where(predicate);
        }

        public IEntity SingleOrDefault(Expression<Func<IEntity, bool>> predicate)
        {
            IQueryable<IEntity> dbQuery = Context.Set<IEntity>();

            return dbQuery.AsNoTracking().SingleOrDefault(predicate);
        }

        public IEntity Add(IEntity entity)
        {
            entity.CreationDate = DateTime.Now;
            Context.Set<IEntity>().Add(entity);

            SaveChanges();
            Context.Entry(entity).GetDatabaseValues();
            return entity;
        }

        public IEnumerable<IEntity> AddRange(IEnumerable<IEntity> entities)
        {
            foreach (IEntity entity in entities)
            {
                //if (entity is ICloudEntity)
                //    (entity as ICloudEntity).CompanyId = User.CRG_COM_ID;

                //if (UtilitiesDAL.DatabaseType == "OracleDB")
                //{
                //    if (entity is IId)
                //        (entity as IId).Id = GetSequance(entity.TableName);
                //}

                entity.CreationDate = DateTime.Now;
                //entity.CreatedBy = User.USERNAME;
            }

            Context.Set<IEntity>().AddRange(entities);
            SaveChanges();
            return entities;

        }
        public IEnumerable<IEntity> AddRange(IEnumerable<IEntity> entities, Expression<Action<IEnumerable<IEntity>>> postAction)
        {
            postAction.Compile().Invoke(entities);

            foreach (IEntity entity in entities)
            {
                entity.CreationDate = DateTime.Now;
                entity.Id = Context.Set<IEntity>().Count() > 0 ? Context.Set<IEntity>().Max(z => z.Id) + 1 : 1;
                var result = Context.Set<IEntity>().Add(entity).Entity;
                SaveChanges();

            }

            return entities;
        }
        public IEntity Remove(IEntity entity)
        {
            Context.Set<IEntity>().Remove(entity);
            SaveChanges();
            return entity;
        }

        public IEnumerable<IEntity> RemoveRange(IEnumerable<IEntity> entities)
        {
            Context.Set<IEntity>().RemoveRange(entities);
            SaveChanges();
            return entities;
        }

        public IEntity Update(IEntity entity)
        {
            // entity.ModificationDate = DateTime.Now;
            Context.Set<IEntity>().Attach(entity);
            Context.Entry(entity).State = EntityState.Modified;
            SaveChanges();
            return entity;
        }

        public int GetSequance(string tableName)
        {
            throw new NotImplementedException();
        }

        public void SaveChanges()
        {
            Context.SaveChanges();
        }
    }
}