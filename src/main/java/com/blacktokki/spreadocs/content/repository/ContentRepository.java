package com.blacktokki.spreadocs.content.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.blacktokki.spreadocs.content.entity.Content;

@Repository
public interface ContentRepository extends JpaRepository<Content, Long>, JpaSpecificationExecutor<Content>{
    @Modifying(clearAutomatically = true)
    @Query("UPDATE Content c SET c.order = :order WHERE c.id = :id")
    void updateOrder(@Param("id") Long id, @Param("order") int order);

    @Query("Select c from Content c Where c.parentId in (:parentIds) order by c.updated desc limit 1")
    Optional<Content> lastContent(@Param("parentIds") List<Long> parentIds);
}