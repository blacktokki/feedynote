package org.hibernate.integrator.api.integrator;

import org.hibernate.boot.Metadata;
import org.hibernate.engine.spi.SessionFactoryImplementor;
import org.hibernate.service.spi.SessionFactoryServiceRegistry;

import com.blacktokki.notebook.core.migration.HibernateInfoHolder;

public class Integrator implements org.hibernate.integrator.spi.Integrator {

    @Override
    public void integrate(Metadata metadata, SessionFactoryImplementor sessionFactory, SessionFactoryServiceRegistry serviceRegistry) {
        HibernateInfoHolder.setMetadata(metadata);
        HibernateInfoHolder.setServiceRegistry(serviceRegistry);
    }

    @Override
    public void disintegrate(SessionFactoryImplementor sessionFactory, SessionFactoryServiceRegistry serviceRegistry) {
    }
}
