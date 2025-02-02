package com.blacktokki.spreadocs.account.service;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

import com.blacktokki.spreadocs.account.dto.UserDto;
import com.blacktokki.spreadocs.account.dto.UserQueryParam;
import com.blacktokki.spreadocs.account.entity.User;
import com.blacktokki.spreadocs.core.dto.AuthenticateDto;
import com.blacktokki.spreadocs.core.dto.BaseUserDto;
import com.blacktokki.spreadocs.core.service.restful.RestfulService;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public class UserService extends RestfulService<UserDto, User, Long> implements UserDetailsService{
    @Override
    public AuthenticateDto loadUserByUsername(String username){
        UserQueryParam userSpecification = new UserQueryParam(null, username, null);
        User user = getExecutor().findOne(toSpecification(userSpecification)).orElse(null);
        return user != null ? new AuthenticateDto(user.getId(), user.getUsername(), user.getPassword(), user.getName()) : null;
    }

    @Override
    public Predicate toPredicate(String key, Object value, Root<User> root, CriteriaBuilder builder){
        if (value == null){
            return null;
        }
        if (key.equals("self") && (Boolean)value){
            String username = ((BaseUserDto)SecurityContextHolder.getContext().getAuthentication().getPrincipal()).username();
            return builder.equal(root.get("username"), username);
        }
        return builder.equal(root.get(key), value);
    }
}